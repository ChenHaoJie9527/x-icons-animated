import type { Transition } from "motion/react";
import type { DefaultMotionPatch, MotionTarget } from "./types";

const createPatch = (
	normalTarget: MotionTarget,
	animateTarget: MotionTarget
): DefaultMotionPatch => {
	return {
		normal: normalTarget,
		animate: animateTarget,
	};
};

export const fade = (from = 1, to = 1): DefaultMotionPatch => {
	return createPatch({ opacity: from }, { opacity: to });
};

export const rotate = (
	from: number,
	to: number | number[]
): DefaultMotionPatch => {
	return createPatch({ rotate: from }, { rotate: to });
};

export const translateX = (
	from: number,
	to: number | number[]
): DefaultMotionPatch => {
	return createPatch({ x: from }, { x: to });
};

export const translateY = (
	from: number,
	to: number | number[]
): DefaultMotionPatch => {
	return createPatch({ y: from }, { y: to });
};

export const scaleXY = (
	fromX: number,
	toX: number | number[],
	fromY: number,
	toY: number | number[]
): DefaultMotionPatch => {
	return createPatch(
		{ scaleX: fromX, scaleY: fromY },
		{ scaleX: toX, scaleY: toY }
	);
};

export const withTransition = (transition: Transition): DefaultMotionPatch => {
	return createPatch({}, { transition });
};
