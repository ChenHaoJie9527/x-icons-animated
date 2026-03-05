"use client";
import { cn } from "@x-icons/utils/cn";
import type { Variants } from "motion/react";
import { motion } from "motion/react";
import type { HTMLAttributes, Ref } from "react";
import { useImperativeHandle } from "react";
import type { IconAnimationHandle } from "@/hooks/use-icon-hover-animation";
import { useIconHoverAnimation } from "@/hooks/use-icon-hover-animation";

export interface SunIconHandle extends IconAnimationHandle {}

interface SunIconProps extends HTMLAttributes<HTMLDivElement> {
	size?: number;
	ref?: Ref<SunIconHandle>;
}

/**
 * @description 定义一个圆圈的动画变量
 * @example
 * 初始状态：透明度1，缩放1
 * 动画状态：透明度0，缩放0.8
 * 动画时间：0.3秒
 */
const CIRCLE_VARIANTS: Variants = {
	normal: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.3,
		},
	},
	animate: {
		opacity: [0, 1],
		scale: [0.8, 1],
		transition: {
			duration: 0.4,
			ease: "easeInOut",
		},
	},
};

/**
 * @description 定义一个光线动画变量
 * @param delay 延迟时间
 * @returns {Variants} 光线动画变量
 */
const createRayVariants = (delay: number): Variants => ({
	normal: {
		opacity: 1,
		pathLength: 1,
		transition: {
			duration: 0.2,
		},
	},
	animate: {
		opacity: [0, 1],
		pathLength: [0, 1],
		transition: {
			delay,
			duration: 0.3,
		},
	},
});

const SunIcon = ({
	size = 24,
	color = "currentColor",
	className,
	onMouseEnter,
	onMouseLeave,
	ref,
	...props
}: SunIconProps) => {
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
				fill="none"
				stroke="currentColor"
				stroke-width="1"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				width={size}
				height={size}
			>
				<motion.circle
					animate={controls}
					cx="12"
					cy="12"
					initial="normal"
					r="3.75"
					variants={CIRCLE_VARIANTS}
				/>
				{/* 顶部 */}
				<motion.path
					animate={controls}
					d="M12 3v2.25"
					initial="normal"
					stroke-linecap="round"
					stroke-linejoin="round"
					variants={createRayVariants(0)}
				/>
				{/* 右上 */}
				<motion.path
					animate={controls}
					d="M17.636 5.636l-1.591 1.591"
					initial="normal"
					stroke-linecap="round"
					stroke-linejoin="round"
					variants={createRayVariants(0.05)}
				/>
				{/* 右侧 */}
				<motion.path
					animate={controls}
					d="M21 12h-2.25"
					initial="normal"
					stroke-linecap="round"
					stroke-linejoin="round"
					variants={createRayVariants(0.1)}
				/>
				{/* 右下 */}
				<motion.path
					animate={controls}
					d="M17.636 18.364l-1.591-1.591"
					initial="normal"
					stroke-linecap="round"
					stroke-linejoin="round"
					variants={createRayVariants(0.15)}
				/>
				{/* 底部 */}
				<motion.path
					animate={controls}
					d="M12 18.75V21"
					initial="normal"
					stroke-linecap="round"
					stroke-linejoin="round"
					variants={createRayVariants(0.2)}
				/>
				{/* 左下 */}
				<motion.path
					animate={controls}
					d="M6.364 18.364l1.591-1.591"
					initial="normal"
					stroke-linecap="round"
					stroke-linejoin="round"
					variants={createRayVariants(0.25)}
				/>
				{/* 左侧 */}
				<motion.path
					animate={controls}
					d="M3 12h2.25"
					initial="normal"
					stroke-linecap="round"
					stroke-linejoin="round"
					variants={createRayVariants(0.3)}
				/>
				{/* 左上 */}
				<motion.path
					animate={controls}
					d="M6.364 5.636l1.591 1.591"
					initial="normal"
					stroke-linecap="round"
					stroke-linejoin="round"
					variants={createRayVariants(0.35)}
				/>
			</svg>
		</div>
	);
};

SunIcon.displayName = "sun";

export { SunIcon };
