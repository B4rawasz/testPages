import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import { RootToggle } from "fumadocs-ui/components/layout/root-toggle";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<DocsLayout
			tree={source.pageTree}
			sidebar={{
				tabs: false,
				banner: (
					<RootToggle
						options={[
							{
								title: "Folder 1",
								description: "Pages in folder 1",
								url: "/docs",
							},
							{
								title: "Folder 2",
								description: "Pages in folder 2",
								url: "/docs",
							},
						]}
					/>
				),
			}}
			{...baseOptions}
		>
			{children}
		</DocsLayout>
	);
}
