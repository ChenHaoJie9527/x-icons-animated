import { Header } from "@/components/header";
import { IconsBrowser } from "@/components/icons-browser";
import type { IconMeta } from "@/lib/icon-types";

type Icon = Pick<IconMeta, "name" | "keywords" | "source">;

interface PageContentProps {
	icons: Icon[];
}

export function PageContent({ icons }: PageContentProps) {
	return (
		<section className="grid w-full  grid-rows-[auto_1fr_auto] gap-2">
			<Header icons={icons} />

			<main className="container mx-auto">
				<IconsBrowser icons={icons} />
			</main>

			<footer className="container mx-auto">
				<div className="w-full h-px bg-border" />
				<div className="flex items-center justify-between py-4">
					<span className="text-sm text-muted">
						© 2025 x-icons — MIT License
					</span>
					<span className="text-sm text-muted">crafted with motion</span>
				</div>
			</footer>
		</section>
	);
}
