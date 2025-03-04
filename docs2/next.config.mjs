import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
export const config = {
	reactStrictMode: true,
	output: "export",
	basePath: "/testPages",
};

export default withMDX(config);
