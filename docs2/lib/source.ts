import { docs } from "@/.source";
import { loader } from "fumadocs-core/source";
import { attachFile, createOpenAPI } from "fumadocs-openapi/server";

export const source = loader({
	pageTree: {
		attachFile,
	},
	baseUrl: "/testPages/docs",
	source: docs.toFumadocsSource(),
});
export const openapi = createOpenAPI();
