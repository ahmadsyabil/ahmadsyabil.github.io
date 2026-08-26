/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export -> produces ./out, deployable to GitHub Pages, Netlify, S3, anywhere.
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
  // If you deploy to a PROJECT repo (github.com/<user>/<repo>) instead of
  // <user>.github.io, uncomment these two lines and set <repo>:
  // basePath: '/<repo>',
  // assetPrefix: '/<repo>/',
};

export default nextConfig;
