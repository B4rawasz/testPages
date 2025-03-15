import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import { RootToggle } from "fumadocs-ui/components/layout/root-toggle";
import { GithubInfo } from "fumadocs-ui/components/github-info";
import { MetaData } from "fumadocs-core/source";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<DocsLayout
			tree={source.pageTree}
			sidebar={{
				/*tabs: false,
				banner: (
					<RootToggle
						options={[
							{
								title: "Folder 1",
								description: "Pages in folder 1",
								url: "/docs/test1",
								icon: <Settings />,
							},
							{
								title: "Folder 2",
								description: "Pages in folder 2",
								url: "/docs/test2",
							},
						]}
					/>
				),*/
				tabs: {
					transform(option, node) {
						const meta = source.getNodeMeta(node);
						if (!meta) return option;

						return {
							...option,
							icon: (
								<div style={{ color: meta.data.iconColor }}>{node.icon}</div>
							),
						};
					},
				},
			}}
			links={[
				{
					type: "custom",
					children: (
						<GithubInfo
							owner="fuma-nama"
							repo="fumadocs"
							className="lg:-mx-2"
						/>
					),
				},
			]}
			{...baseOptions}
		>
			{children}
		</DocsLayout>
	);
}
