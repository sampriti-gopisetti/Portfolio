/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production'

const nextConfig = {
	// Enable static export for GitHub Pages
	output: 'export',
	// Use unoptimized images since GitHub Pages cannot run the image optimizer
	images: { unoptimized: true },
	// Only apply the GitHub Pages path prefix in production builds
	basePath: isProduction ? '/Portfolio' : '',
	assetPrefix: isProduction ? '/Portfolio/' : '',
};

export default nextConfig;
