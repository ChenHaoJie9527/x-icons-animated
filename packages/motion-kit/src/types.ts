import type { TargetAndTransition, Variants } from "motion/react";

export const DEFAULT_MOTION_STATES = ["normal", "animate"] as const;

export type DefaultMotionState = (typeof DEFAULT_MOTION_STATES)[number];

export type MotionTarget = TargetAndTransition;

export type MotionPatch<S extends string = DefaultMotionState> = Partial<
	Record<S, MotionTarget>
>;

export type DefaultMotionPatch = MotionPatch<DefaultMotionState>;

export interface MotionKitOptions {
	/**
	 * 是否允许在 hover 事件上自动播放动画。
	 * 当组件通过 ref 被外部控制时，建议设为 false。
	 */
	playOnHover?: boolean;
}

export type MotionVariants = Variants;
