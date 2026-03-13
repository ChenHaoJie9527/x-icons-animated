import { Timeline, TimelineRoot } from "@/timeline";

export const App = () => {
	return (
		<div className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center gap-6 px-6 py-12">
			<h1
				className="text-3xl font-semibold tracking-tight"
				data-testid="timeline-playground-title"
			>
				timeline-kit playground
			</h1>

			<TimelineRoot value={{ baseTime: 0.1, stagger: 0.15 }}>
				<Timeline
					direction="left"
					data-testid="timeline-item-header-left"
					className="rounded-md border border-border bg-surface px-4 py-3"
				>
					Header Left
				</Timeline>

				<Timeline
					direction="right"
					data-testid="timeline-item-header-right"
					className="rounded-md border border-border bg-surface px-4 py-3"
				>
					Header Right
				</Timeline>

				<Timeline
					at={0.2}
					direction="up"
					data-testid="timeline-item-hero-title"
					className="rounded-md border border-border bg-surface px-4 py-3"
				>
					Hero Title
				</Timeline>
			</TimelineRoot>
		</div>
	);
};
