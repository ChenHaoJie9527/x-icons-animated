"use client";
import {
	type HTMLAttributes,
	type Ref,
	useImperativeHandle,
	useRef,
} from "react";
import { Timeline } from "@/timeline";
import { TimelineRoot } from "@/timeline-root";
import type { TimelineController } from "@/types";

export interface TimelineUpHandle extends TimelineController {}

interface TimelineUpProps extends HTMLAttributes<HTMLDivElement> {
	ref?: Ref<TimelineUpHandle>;
}

export const TimelineUp = ({ ref, ...props }: TimelineUpProps) => {
	const timelineControllerRef = useRef<TimelineController>(null);

	useImperativeHandle(ref, () => {
		return {
			start() {
				timelineControllerRef.current?.start();
			},
			stop() {
				timelineControllerRef.current?.stop();
			},
			reset() {
				timelineControllerRef.current?.reset();
			},
		};
	});
	return (
		<div
			className="size-50 rounded-2xl border-2 border-border hover-border-theme cursor-pointer"
			// onMouseEnter={handleMouseEnter}
			// onMouseLeave={handleMouseLeave}
			{...props}
		>
			up 方向淡入
			<TimelineRoot
				ref={timelineControllerRef}
				autoPlay={false}
				className="space-y-2"
			>
				<Timeline
					direction="up"
					className="w-full px-2"
					data-testid="timeline-up-item-1"
				>
					<div className="w-full h-6 bg-black" />
				</Timeline>
				<Timeline direction="up" className="w-full px-2">
					<div className="w-full h-6 bg-black" />
				</Timeline>
				<Timeline direction="up" className="w-full px-2">
					<div className="w-full h-6 bg-black" />
				</Timeline>
				<Timeline direction="up" className="w-full px-2">
					<div className="w-full h-6 bg-black" />
				</Timeline>
				<Timeline direction="up" className="w-full px-2">
					<div className="w-full h-6 bg-black" />
				</Timeline>
			</TimelineRoot>
		</div>
	);
};
