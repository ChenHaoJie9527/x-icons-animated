"use client";
import { cn } from "@x-icons/utils/cn";
import type { Variants } from "motion/react";
import { motion } from "motion/react";
import type { HTMLAttributes, Ref } from "react";
import { useImperativeHandle } from "react";
import { useIconHoverAnimation } from "@/hooks/use-icon-hover-animation";
import type { IconAnimationHandle } from "@/lib/icon-types";

export interface ArrowRightCircleIconHandle extends IconAnimationHandle {}

interface ArrowRightCircleIconProps extends HTMLAttributes<HTMLDivElement> {
	size?: number;
	ref?: Ref<ArrowRightCircleIconHandle>;
}

const ARROW_RIGHT_CIRCLE_VARIANTS_PATH_1: Variants = {
	normal: {
		pathLength: 1,
		pathOffset: 0,
	},
	animate: {
		pathLength: [0, 1],
		pathOffset: [1, 0],
		transition: {
			duration: 0.3,
			ease: "easeInOut",
		},
	},
};

const ARROW_RIGHT_CIRCLE_VARIANTS_PATH_2: Variants = {
	normal: {
		x: 0,
		opacity: 1,
	},
	animate: {
		x: [-3, 3, 0],
		opacity: [0, 1],
		transition: {
			duration: 0.3,
			delay: 0.3,
		},
	},
};
const ArrowRightCircleIcon = ({
	size = 32,
	className,
	onMouseEnter,
	onMouseLeave,
	ref,
	...props
}: ArrowRightCircleIconProps) => {
	const { controls, handleMouseEnter, handleMouseLeave } =
		useIconHoverAnimation({ ref, onMouseEnter, onMouseLeave });
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
					variants={ARROW_RIGHT_CIRCLE_VARIANTS_PATH_1}
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
				/>
				<motion.path
					animate={controls}
					strokeLinecap="round"
					strokeLinejoin="round"
					d="m12.75 15 3-3m0 0-3-3m3 3h-7.5"
					variants={ARROW_RIGHT_CIRCLE_VARIANTS_PATH_2}
				/>
			</svg>
		</div>
	);
};

ArrowRightCircleIcon.displayName = "ArrowRightCircleIcon";
export { ArrowRightCircleIcon };
