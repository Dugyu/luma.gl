import {Device} from '@luma.gl/api';

/** Adds defines to help identify GPU architecture / platform */
export function getPlatformShaderDefines(device: Device): string {
  switch (device.info?.gpuVendor.toLowerCase()) {
    case 'nvidia':
      return `\
#define NVIDIA_GPU
// Nvidia optimizes away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
`;

    case 'intel':
      return `\
#define INTEL_GPU
// Intel optimizes away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
// Intel's built-in 'tan' function doesn't have acceptable precision
#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1
// Intel GPU doesn't have full 32 bits precision in same cases, causes overflow
#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1
`;

    case 'amd':
      // AMD Does not eliminate fp64 code
      return `\
#define AMD_GPU
`;

    default:
      // We don't know what GPU it is, could be that the GPU driver or
      // browser is not implementing UNMASKED_RENDERER constant and not
      // reporting a correct name
      return `\
#define DEFAULT_GPU
// Prevent driver from optimizing away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
`;
  }
}

/** Adds defines to let shaders portably v1/v3 check for features */
export function getVersionDefines(device: Device): string {
  let versionDefines = `\
#if (__VERSION__ > 120)

# define FEATURE_GLSL_DERIVATIVES
# define FEATURE_GLSL_DRAW_BUFFERS
# define FEATURE_GLSL_FRAG_DEPTH
# define FEATURE_GLSL_TEXTURE_LOD

// DEPRECATED FLAGS, remove in v9
# define FRAG_DEPTH
# define DERIVATIVES
# define DRAW_BUFFERS
# define TEXTURE_LOD

#endif // __VERSION
`;

  if (device.features?.has('glsl-frag-depth')) {
    versionDefines += `\

// FRAG_DEPTH => gl_FragDepth is available
#ifdef GL_EXT_frag_depth
#extension GL_EXT_frag_depth : enable
# define FEATURE_GLSL_FRAG_DEPTH
# define FRAG_DEPTH
# define gl_FragDepth gl_FragDepthEXT
#endif
`;
  }
  if (device.features?.has('glsl-derivatives')) {
    versionDefines += `\

// DERIVATIVES => dxdF, dxdY and fwidth are available
#ifdef GL_OES_standard_derivatives
#extension GL_OES_standard_derivatives : enable
# define FEATURE_GLSL_DERIVATIVES
# define DERIVATIVES
#endif
`;
  }
  if (device.features?.has('glsl-frag-data')) {
    versionDefines += `\

// DRAW_BUFFERS => gl_FragData[] is available
#ifdef GL_EXT_draw_buffers
#extension GL_EXT_draw_buffers : require
#define FEATURE_GLSL_DRAW_BUFFERS
#define DRAW_BUFFERS
#endif
`;
  }
  if (device.features?.has('glsl-texture-lod')) {
    versionDefines += `\
// TEXTURE_LOD => texture2DLod etc are available
#ifdef GL_EXT_shader_texture_lod
#extension GL_EXT_shader_texture_lod : enable

# define FEATURE_GLSL_TEXTURE_LOD
# define TEXTURE_LOD

#endif
`;
  }
  return versionDefines;
}
