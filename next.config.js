const NEXT_CONFIG = {
  compress: false,
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
    },
  },
  experimental: {
    forceSwcTransforms: true,
    scrollRestoration: true,
  },
  generateEtags: false,
  optimizeFonts: false,
  poweredByHeader: false,

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = NEXT_CONFIG;
