"use client";
import { useImperativeHandle, type HTMLAttributes, type Ref } from "react";
import {
	useIconHoverAnimation,
	type IconAnimationTimelineHandle,
} from "../src/hooks";
import { TimelineRoot } from "@/timeline-root";
import { Timeline } from "@/timeline";

export interface TimelineUpHandle extends IconAnimationTimelineHandle {}

interface TimelineUpProps extends HTMLAttributes<HTMLDivElement> {
	ref?: Ref<TimelineUpHandle>;
}

export const TimelineUp = ({ ref, ...props }: TimelineUpProps) => {
	const { controls, handleMouseEnter, handleMouseLeave } =
		useIconHoverAnimation({
			ref,
			onMouseEnter: props.onMouseEnter,
			onMouseLeave: props.onMouseLeave,
		});
	useImperativeHandle(ref, () => {
		return {
			startAnimation() {
				controls.start("animate");
			},
			stopAnimation() {
				controls.start("normal");
			},
		};
	});
	return (
		<div
			className="size-50 rounded-2xl border-2 border-border hover-border-theme cursor-pointer"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			{...props}
		>
			up 方向淡入
			<TimelineRoot className="space-y-2">
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
				<Timeline direction="up" className="w-full px-2">
					<div className="w-full h-6 bg-black" />
				</Timeline>
			</TimelineRoot>
		</div>
	);
};
