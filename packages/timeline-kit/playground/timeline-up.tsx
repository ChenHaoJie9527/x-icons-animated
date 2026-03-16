"use client";
import { useImperativeHandle, type HTMLAttributes, type Ref } from "react";
import {
	useIconHoverAnimation,
	type IconAnimationTimelineHandle,
} from "../src/hooks";

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
			className="size-50 rounded-2xl border-2 border-border hover-border-theme cursor-pointer flex items-center justify-center"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			{...props}
		>
			up 方向淡入
		</div>
	);
};
