/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   optimizePackageImports: ['@/components'],
  // },
  // webpack: (config) => {
  //   // config.module.rules = [
  //   //     ...config.module.rules,
  //   //     // ensure our libs barrel files don't constitute imports
  //   //     {
  //   //         test: [/src\/components\/registry.ts/i],
  //   //         sideEffects: false,
  //   //     },
  //   // ]
  //   // make sure barrel files are correctly "tree-shaked"
  //   config.module.rules.push({
  //     test: [/src\/components\/registry.ts/i, /src\/components\/organisms\/registryEntry.ts/],
  //     sideEffects: false,
  //   });

  //   return config;
  // },
  // modularizeImports: {
  //   '@/components/organisms': {
  //     transform: '@/components/organisms/{{member}}',
  //   },
  // },
};

export default nextConfig;
