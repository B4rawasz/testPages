import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
	reactStrictMode: true,
	output: "export",
	transpilePackages: ["three"],
	basePath: "/testPages",
};

export default withMDX(config);
