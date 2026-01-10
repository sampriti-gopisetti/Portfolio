/** @type {import('next').NextConfig} */
const nextConfig = {
	// Enable static export for GitHub Pages
	output: 'export',
	// Use unoptimized images since GitHub Pages cannot run the image optimizer
	images: { unoptimized: true },
	// Set basePath to the repository name if deploying to project pages
	// Adjust to '' if deploying to user/organization pages (username.github.io)
	basePath: '/Portfolio',
	assetPrefix: '/Portfolio/',
};

export default nextConfig;
