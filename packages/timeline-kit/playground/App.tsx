"use client";
import { useRef } from "react";
import { Layout } from "./layout";
import { TimelineDown, type TimelineDownHandle } from "./timeline-down";
import { TimelineLeft, type TimelineLeftHandle } from "./timeline-left";
import { TimelineRight, type TimelineRightHandle } from "./timeline-right";
import { TimelineUp, type TimelineUpHandle } from "./timeline-up";

export const App = () => {
	const timelineUpRef = useRef<TimelineUpHandle>(null);
	const timelineDownRef = useRef<TimelineDownHandle>(null);
	const timelineLeftRef = useRef<TimelineLeftHandle>(null);
	const timelineRightRef = useRef<TimelineRightHandle>(null);

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
					<div
						data-testid="timeline-left-trigger"
						onMouseEnter={() => timelineLeftRef.current?.start()}
					>
						<TimelineLeft
							ref={timelineLeftRef}
							data-testid="timeline-left-card"
						/>
					</div>
					<div
						data-testid="timeline-right-trigger"
						onMouseEnter={() => timelineRightRef.current?.start()}
					>
						<TimelineRight
							ref={timelineRightRef}
							data-testid="timeline-right-card"
						/>
					</div>
				</div>
			</section>
			<section className="flex flex-col gap-2">
				<h2 className="text-lg font-bold">组合示例</h2>
			</section>
		</Layout>
	);
};
