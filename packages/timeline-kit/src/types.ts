import type { motion } from "motion/react";
import type { PropsWithChildren } from "react";

export type AnimationEase = "easeIn" | "easeOut" | "easeInOut" | "linear";
export type TimelineDirection = "up" | "down" | "left" | "right" | "none";

export type TimelineDefaults = {
	baseTime: number;
	duration: number;
	ease: AnimationEase;
	distance: number;
	stagger: number;
};

export type TimelineItemInput = {
	at?: number;
	index?: number;
	direction?: TimelineDirection;
	distance?: number;
	duration?: number;
	ease?: AnimationEase;
};

export type AnimationVariant = {
	initial: {
		opacity: number;
		x?: number;
		y?: number;
	};
	animate: {
		opacity: number;
		x?: number;
		y?: number;
	};
	transition: {
		duration: number;
		delay: number;
		ease: AnimationEase;
	};
};

export type TimelineRootContextValue = {
	defaults: TimelineDefaults;
	nextIndex: () => number;
	autoPlay: boolean;
	registerItem: (
		itemId: number,
		controller: TimelineItemController
	) => () => void;
};

export type TimelineItemController = {
	start: () => void;
	stop: () => void;
	reset: () => void;
};

export type TimelineController = TimelineItemController;

export type TimelineProps = PropsWithChildren<
	TimelineItemInput & {
		as?: typeof motion.div;
		className?: string;
		[key: string]: unknown;
	}
>;
