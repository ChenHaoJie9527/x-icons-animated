import { Header } from "@/components/header";
import { IconList } from "@/components/icon-list";
import { StoryTimeline } from "@/components/story-timeline";
import type { IconMeta } from "@/lib/icon-types";

type Icon = Pick<IconMeta, "name" | "keywords">;

interface PageContentProps {
	icons: Icon[];
}

export function PageContent({ icons }: PageContentProps) {
	return (
		<section className="grid w-full  grid-rows-[auto_1fr_auto] gap-2">
			<Header icons={icons} />

			<main className="container mx-auto">
				<StoryTimeline />
				<IconList icons={icons} />
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
