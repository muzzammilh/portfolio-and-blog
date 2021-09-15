module.exports = {
  reactStrictMode: true,
  target: 'serverless',
  /** 
   * Fix for cannot resolve module fs
   * https://github.com/vercel/next.js/issues/7755#issuecomment-916022379
  */
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    return config;
  },
};
