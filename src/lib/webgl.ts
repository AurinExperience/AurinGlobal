/**
 * Contexto WebGL solo si hay GPU de verdad. Sin ella (SwiftShader, llvmpipe: Lighthouse/PageSpeed,
 * equipos sin aceleración) el shader se dibuja en el CPU y congela la página: se queda la foto fija.
 */
export function gpuContext(canvas: HTMLCanvasElement | null) {
  const gl = canvas?.getContext('webgl', { alpha: false, antialias: false, failIfMajorPerformanceCaveat: true });
  const info = gl?.getExtension('WEBGL_debug_renderer_info');
  // ponytail: por nombre del renderizador; si un navegador lo oculta, pasa (el shader ya se pausa fuera de pantalla)
  if (info && /swiftshader|llvmpipe|softpipe|software|basic render/i.test(gl!.getParameter(info.UNMASKED_RENDERER_WEBGL))) return null;
  return gl ?? null;
}

const VERT = 'attribute vec2 p; void main() { gl_Position = vec4(p, 0., 1.); }';

/**
 * Programa de pantalla completa (un triángulo) y sus uniforms por nombre. Lo usan los shaders de
 * los heros (HeroHome, HeroState).
 * Con KHR_parallel_shader_compile el navegador compila en otro hilo: se espera de cuadro en cuadro
 * en vez de congelar el hilo principal preguntando si terminó (en Windows/ANGLE puede tardar cientos de ms)
 */
export async function setup(gl: WebGLRenderingContext, frag: string, names: string[]) {
  const prog = gl.createProgram()!;
  for (const [type, src] of [
    [gl.VERTEX_SHADER, VERT],
    [gl.FRAGMENT_SHADER, frag],
  ] as const) {
    const shader = gl.createShader(type)!;
    gl.shaderSource(shader, src);
    gl.compileShader(shader);
    gl.attachShader(prog, shader);
  }
  gl.bindAttribLocation(prog, 0, 'p');
  gl.linkProgram(prog);
  const ext = gl.getExtension('KHR_parallel_shader_compile');
  if (ext) while (!gl.getProgramParameter(prog, ext.COMPLETION_STATUS_KHR)) await new Promise(requestAnimationFrame);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return null;
  gl.useProgram(prog);
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(0);
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
  return Object.fromEntries(names.map((name) => [name, gl.getUniformLocation(prog, name)]));
}
