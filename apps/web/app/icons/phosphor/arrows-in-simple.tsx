"use client";

import { cn } from "@x-icons/utils/cn";
import type { Variants } from "motion/react";
import { motion } from "motion/react";
import type { HTMLAttributes, Ref } from "react";
import { useImperativeHandle } from "react";
import { useIconHoverAnimation } from "@/hooks/use-icon-hover-animation";
import type { IconAnimationHandle } from "@/lib/icon-types";

export interface ArrowsInSimpleIconHandle extends IconAnimationHandle {}

interface ArrowsInSimpleIconProps extends HTMLAttributes<HTMLDivElement> {
	size?: number;
	ref?: Ref<ArrowsInSimpleIconHandle>;
}

const ARROWS_IN_SIMPLE_VARIANTS_PATH_1: Variants = {
	normal: {
		x: 8,
		y: -8,
	},
	animate: {
		x: [8, -12, -9, -13, -10, 8],
		y: [-8, 12, 9, 13, 10, -8],
		transition: {
			duration: 1.05,
			ease: "easeInOut",
			times: [0, 0.4, 0.58, 0.74, 0.88, 1],
		},
	},
};

const ARROWS_IN_SIMPLE_VARIANTS_PATH_2: Variants = {
	normal: {
		x: -8,
		y: 8,
	},
	animate: {
		x: [-8, 12, 9, 13, 10, -8],
		y: [8, -12, -9, -13, -10, 8],
		transition: {
			duration: 1.05,
			ease: "easeInOut",
			times: [0, 0.4, 0.58, 0.74, 0.88, 1],
		},
	},
};

const ArrowsInSimpleIcon = ({
	size = 32,
	color = "currentColor",
	className,
	onMouseEnter,
	onMouseLeave,
	ref,
	...props
}: ArrowsInSimpleIconProps) => {
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
				width={size}
				height={size}
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1"
				fill="currentColor"
				viewBox="0 0 256 256"
			>
				<motion.path
					animate={controls}
					variants={ARROWS_IN_SIMPLE_VARIANTS_PATH_1}
					d="M210.83,50.83,153.66,108H192a4,4,0,0,1,0,8H144a4,4,0,0,1-4-4V64a4,4,0,0,1,8,0v38.34l57.17-57.17a4,4,0,1,1,5.66,5.66Z"
				/>
				<motion.path
					animate={controls}
					variants={ARROWS_IN_SIMPLE_VARIANTS_PATH_2}
					d="M112,140H64a4,4,0,0,0,0,8h38.34L45.17,205.17a4,4,0,0,0,5.66,5.66L108,153.66V192a4,4,0,0,0,8,0V144A4,4,0,0,0,112,140Z"
				/>
			</svg>
		</div>
	);
};

ArrowsInSimpleIcon.displayName = "ArrowsInSimpleIcon";
export { ArrowsInSimpleIcon };
