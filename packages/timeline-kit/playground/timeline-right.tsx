"use client";
import type { HTMLAttributes, Ref } from "react";
import { useImperativeHandle, useRef } from "react";
import { Timeline } from "@/timeline";
import { TimelineRoot } from "@/timeline-root";
import type { TimelineController } from "@/types";

export interface TimelineRightHandle extends TimelineController {}

interface TimelineRightProps extends HTMLAttributes<HTMLDivElement> {
	ref?: Ref<TimelineRightHandle>;
}

export const TimelineRight = ({ ref, ...props }: TimelineRightProps) => {
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
			{...props}
		>
			<span className="text-lg text-center w-full block">right 方向淡入</span>
			<TimelineRoot
				ref={timelineControllerRef}
				autoPlay={true}
				className="space-y-2 px-5"
			>
				<Timeline
					direction="right"
					className="w-full px-2"
					data-testid="timeline-right-item-1"
				>
					<div className="w-full h-6 bg-black" />
				</Timeline>
				<Timeline direction="right" className="w-full px-2">
					<div className="w-full h-6 bg-black" />
				</Timeline>
				<Timeline direction="right" className="w-full px-2">
					<div className="w-full h-6 bg-black" />
				</Timeline>
				<Timeline direction="right" className="w-full px-2">
					<div className="w-full h-6 bg-black" />
				</Timeline>
				<Timeline direction="right" className="w-full px-2">
					<div className="w-full h-6 bg-black" />
				</Timeline>
			</TimelineRoot>
		</div>
	);
};
