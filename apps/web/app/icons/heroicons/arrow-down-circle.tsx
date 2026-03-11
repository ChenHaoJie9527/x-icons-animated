"use client";
import { cn } from "@x-icons/utils/cn";
import { motion, type Variants } from "motion/react";
import type { HTMLAttributes, Ref } from "react";
import { useImperativeHandle } from "react";
import { useIconHoverAnimation } from "@/hooks/use-icon-hover-animation";
import type { IconAnimationHandle } from "@/lib/icon-types";

export interface ArrowDownCircleIconHandle extends IconAnimationHandle {}

interface ArrowDownCircleIconProps extends HTMLAttributes<HTMLDivElement> {
	size?: number;
	ref?: Ref<ArrowDownCircleIconHandle>;
}

/**
 * 箭头 Y 轴位移动画
 */
const ARROW_DOWN_VARIANTS: Variants = {
	normal: {
		y: 0,
		opacity: 1,
	},
	animate: {
		y: [-2, 2, 0],
		opacity: [0, 1],
		transition: {
			times: [0, 0.4, 1],
			duration: 0.3,
			delay: 0.3,
		},
	},
};

/**
 * 路径圆圈动画变量
 */
const CIRCLE_VARIANTS: Variants = {
	normal: {
		scale: 1,
		pathLength: 1,
		pathOffset: 0,
	},
	animate: {
		scale: [1, 1.1, 1],
		pathLength: [0, 1],
		pathOffset: [1, 0],
		transition: {
			duration: 0.4,
			ease: "easeInOut",
		},
	},
};
const ArrowDownCircleIcon = ({
	size = 32,
	color = "currentColor",
	className,
	onMouseEnter,
	onMouseLeave,
	ref,
	...props
}: ArrowDownCircleIconProps) => {
	const { controls, handleMouseEnter, handleMouseLeave } =
		useIconHoverAnimation({
			ref,
			onMouseEnter,
			onMouseLeave,
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
			className={cn(className)}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			{...props}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth="1"
				stroke="currentColor"
				width={size}
				height={size}
			>
				<motion.path
					animate={controls}
					strokeLinecap="round"
					strokeLinejoin="round"
					d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5"
					variants={ARROW_DOWN_VARIANTS}
				/>
				<motion.path
					animate={controls}
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={CIRCLE_VARIANTS}
					d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
				/>
			</svg>
		</div>
	);
};

export { ArrowDownCircleIcon };
