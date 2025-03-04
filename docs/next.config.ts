import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	basePath: "/testPages",
	output: "export", // <=== enables static exports
	reactStrictMode: true,
	images: {
		loader: "custom",
		loaderFile: "./custom_img.js",
	},
};

export default nextConfig;
