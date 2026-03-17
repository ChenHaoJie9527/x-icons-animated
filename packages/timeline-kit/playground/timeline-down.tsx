"use client";
import type { HTMLAttributes, Ref } from "react";
import { useImperativeHandle, useRef } from "react";
import { Timeline } from "@/timeline";
import { TimelineRoot } from "@/timeline-root";
import type { TimelineController } from "@/types";

export interface TimelineDownHandle extends TimelineController {}

interface TimelineDownProps extends HTMLAttributes<HTMLDivElement> {
	ref?: Ref<TimelineDownHandle>;
}

export const TimelineDown = ({ ref, ...props }: TimelineDownProps) => {
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
			className="size-50 rounded-2xl border-2 border-border hover-border-theme cursor-pointer "
			{...props}
		>
			down 方向淡入
			<TimelineRoot
				ref={timelineControllerRef}
				autoPlay={true}
				className="space-y-2"
			>
				<Timeline
					direction="down"
					className="w-full px-2"
					data-testid="timeline-down-item-2"
				>
					<div className="w-full h-6 bg-black" />
				</Timeline>
				<Timeline direction="down" className="w-full px-2">
					<div className="w-full h-6 bg-black" />
				</Timeline>
				<Timeline direction="down" className="w-full px-2">
					<div className="w-full h-6 bg-black" />
				</Timeline>
				<Timeline direction="down" className="w-full px-2">
					<div className="w-full h-6 bg-black" />
				</Timeline>
				<Timeline direction="down" className="w-full px-2">
					<div className="w-full h-6 bg-black" />
				</Timeline>
			</TimelineRoot>
		</div>
	);
};
