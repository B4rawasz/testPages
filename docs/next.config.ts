import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
	/* config options here */
	basePath: isProd ? "/testPages" : "",
	output: "export", // <=== enables static exports
	reactStrictMode: true,
	images: {
		loader: isProd ? "custom" : "default",
		loaderFile: isProd ? "./custom_img.js" : "",
	},
};

export default nextConfig;
