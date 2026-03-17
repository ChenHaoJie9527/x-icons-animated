"use client";
import { useRef } from "react";
import { Layout } from "./layout";
import { TimelineUp, type TimelineUpHandle } from "./timeline-up";
import { TimelineDown, type TimelineDownHandle } from "./timeline-down";

export const App = () => {
	const timelineUpRef = useRef<TimelineUpHandle>(null);
	const timelineDownRef = useRef<TimelineDownHandle>(null);

	return (
		<Layout>
			<section className="flex flex-col gap-2">
				<h2 className="text-lg font-bold">基础示例</h2>
				<div className="flex w-full flex-wrap gap-4">
					<div
						data-testid="timeline-up-trigger"
						onMouseEnter={() => timelineUpRef.current?.start()}
					>
						<TimelineUp ref={timelineUpRef} data-testid="timeline-up-card" />
					</div>
					<div
						data-testid="timeline-down-trigger"
						onMouseEnter={() => timelineDownRef.current?.start()}
					>
						<TimelineDown
							ref={timelineDownRef}
							data-testid="timeline-down-card"
						/>
					</div>
					<div className="size-50 rounded-2xl border-2 border-border hover-border-theme cursor-pointer flex items-center justify-center">
						left 方向淡入
					</div>
					<div className="size-50 rounded-2xl border-2 border-border hover-border-theme cursor-pointer flex items-center justify-center">
						right 方向淡入
					</div>
				</div>
			</section>
			<section className="flex flex-col gap-2">
				<h2 className="text-lg font-bold">组合示例</h2>
			</section>
		</Layout>
	);
};
