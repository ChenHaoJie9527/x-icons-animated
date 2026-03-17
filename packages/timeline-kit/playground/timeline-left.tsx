"use client";
import type { HTMLAttributes, Ref } from "react";
import { useImperativeHandle, useRef } from "react";
import { Timeline } from "@/timeline";
import { TimelineRoot } from "@/timeline-root";
import type { TimelineController } from "@/types";

export interface TimelineLeftHandle extends TimelineController {}

interface TimelineLeftProps extends HTMLAttributes<HTMLDivElement> {
	ref?: Ref<TimelineLeftHandle>;
}

export const TimelineLeft = ({ ref, ...props }: TimelineLeftProps) => {
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
			left 方向淡入
			<TimelineRoot
				ref={timelineControllerRef}
				autoPlay={true}
				className="space-y-2"
			>
				<Timeline
					direction="left"
					className="w-full px-2"
					data-testid="timeline-left-item-1"
				>
					<div className="w-full h-6 bg-black" />
				</Timeline>
				<Timeline direction="left" className="w-full px-2">
					<div className="w-full h-6 bg-black" />
				</Timeline>
				<Timeline direction="left" className="w-full px-2">
					<div className="w-full h-6 bg-black" />
				</Timeline>
				<Timeline direction="left" className="w-full px-2">
					<div className="w-full h-6 bg-black" />
				</Timeline>
				<Timeline direction="left" className="w-full px-2">
					<div className="w-full h-6 bg-black" />
				</Timeline>
			</TimelineRoot>
		</div>
	);
};
