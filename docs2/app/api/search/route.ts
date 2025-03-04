import { source } from "@/lib/source";
import { createFromSource, createSearchAPI } from "fumadocs-core/search/server";

export const revalidate = false;

const prefix = "/testPages";

export const { staticGET: GET } = createSearchAPI("advanced", {
	indexes: source.getPages().map((page) => ({
		title: page.data.title,
		description: page.data.description,
		url: page.url.startsWith(prefix) ? page.url.slice(prefix.length) : page.url,
		id: page.url,
		structuredData: page.data.structuredData,
	})),
});
