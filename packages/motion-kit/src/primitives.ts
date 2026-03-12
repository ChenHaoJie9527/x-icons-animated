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

/**
 * @description 淡入淡出
 * @param from 初始透明度
 * @param to 目标透明度
 * @example
 * fade(0, 1) // { normal: { opacity: 0 }, animate: { opacity: 1 } }
 * fade(1, [0, 1]) // { normal: { opacity: 1 }, animate: { opacity: [0, 1] } }
 * @returns DefaultMotionPatch
 */
export const fade = (
	normalOpacity: number,
	animateOpacity: number | number[]
): DefaultMotionPatch => {
	return createPatch({ opacity: normalOpacity }, { opacity: animateOpacity });
};

/**
 * @description 旋转
 * @param from 初始旋转角度
 * @param to 目标旋转角度
 * @example
 * rotate(0, 45) // { normal: { rotate: 0 }, animate: { rotate: 45 } }
 * rotate(0, [0, 45, 90]) // { normal: { rotate: 0 }, animate: { rotate: [0, 45, 90] } }
 * @returns DefaultMotionPatch
 */
export const rotate = (
	from: number,
	to: number | number[]
): DefaultMotionPatch => {
	return createPatch({ rotate: from }, { rotate: to });
};

/**
 * @description 平移X轴
 * @param from 初始X轴位置
 * @param to 目标X轴位置
 * @example
 * translateX(0, 12) // { normal: { x: 0 }, animate: { x: 12 } }
 * translateX(0, [0, 12, 24]) // { normal: { x: 0 }, animate: { x: [0, 12, 24] } }
 * @returns DefaultMotionPatch
 */
export const translateX = (
	from: number,
	to: number | number[]
): DefaultMotionPatch => {
	return createPatch({ x: from }, { x: to });
};

/**
 * @description 平移Y轴
 * @param from 初始Y轴位置
 * @param to 目标Y轴位置
 * @example
 * translateY(0, 8) // { normal: { y: 0 }, animate: { y: 8 } }
 * translateY(0, [0, -1, 1, 0]) // { normal: { y: 0 }, animate: { y: [0, -1, 1, 0] } }
 * @returns DefaultMotionPatch
 */
export const translateY = (
	from: number,
	to: number | number[]
): DefaultMotionPatch => {
	return createPatch({ y: from }, { y: to });
};

/**
 * @description 缩放X和Y轴
 * @param fromX 初始X缩放比例
 * @param toX 目标X缩放比例
 * @param fromY 初始Y缩放比例
 * @param toY 目标Y缩放比例
 * @example
 * scaleXY(1, 1.2, 1, 0.8) // { normal: { scaleX: 1, scaleY: 1 }, animate: { scaleX: 1.2, scaleY: 0.8 } }
 * scaleXY(1, [1, 0.9, 1.1, 1], 1, [1, 1.1, 0.9, 1]) // { normal: { scaleX: 1, scaleY: 1 }, animate: { scaleX: [1, 0.9, 1.1, 1], scaleY: [1, 1.1, 0.9, 1] } }
 * @returns DefaultMotionPatch
 */
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

/**
 * @description SVG 路径长度动画
 * @param from 初始路径长度
 * @param to 目标路径长度
 * @example
 * pathLength(1, 2) // { normal: { pathLength: 1 }, animate: { pathLength: 2 } }
 * pathLength(1, [1, 2, 3]) // { normal: { pathLength: 1 }, animate: { pathLength: [1, 2, 3] } }
 * @returns DefaultMotionPatch
 */
export const pathLength = (
	from: number,
	to: number | number[]
): DefaultMotionPatch => {
	return createPatch({ pathLength: from }, { pathLength: to });
};

/**
 * @description SVG 路径偏移动画
 * @param from 初始路径偏移
 * @param to 目标路径偏移
 * @example
 * pathOffset(0, 1) // { normal: { pathOffset: 0 }, animate: { pathOffset: 1 } }
 * pathOffset(0, [0, 1, 2]) // { normal: { pathOffset: 0 }, animate: { pathOffset: [0, 1, 2] } }
 * @returns DefaultMotionPatch
 */
export const pathOffset = (
	from: number,
	to: number | number[]
): DefaultMotionPatch => {
	return createPatch({ pathOffset: from }, { pathOffset: to });
};

/**
 * @description 过渡
 * @param transition 过渡
 * @example
 * withTransition({ duration: 0.5, ease: "easeInOut" }) // { normal: {}, animate: { transition: { duration: 0.5, ease: "easeInOut" } } }
 * @returns DefaultMotionPatch
 */
export const withTransition = (transition: Transition): DefaultMotionPatch => {
	return createPatch({}, { transition });
};
