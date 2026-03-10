"use client";

import { cn } from "@x-icons/utils/cn";
import type { HTMLAttributes, Ref } from "react";
import { useImperativeHandle } from "react";
import { useIconHoverAnimation } from "@/hooks/use-icon-hover-animation";
import type { IconAnimationHandle } from "@/lib/icon-types";
import { motion } from "motion/react";
import type { Variants } from "motion/react";

export interface AdjustmentsHorizontalIconHandle extends IconAnimationHandle {}

interface AdjustmentsHorizontalIconProps
	extends HTMLAttributes<HTMLDivElement> {
	size?: number;
	ref?: Ref<AdjustmentsHorizontalIconHandle>;
}

const ADJUSTMENTS_HORIZONTAL_VARIANTS_PATH_1: Variants = {
	normal: {
		pathLength: 1,
		pathOffset: 0,
	},
	animate: {
		pathLength: [0, 1],
		pathOffset: [0, 0],
		transition: {
			duration: 0.3,
			ease: "easeInOut",
		},
	},
};

const ADJUSTMENTS_HORIZONTAL_VARIANTS_PATH_2: Variants = {
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

const ADJUSTMENTS_HORIZONTAL_VARIANTS_PATH_3: Variants = {
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

const AdjustmentsHorizontalIcon = ({
	size = 32,
	className,
	onMouseEnter,
	onMouseLeave,
	ref,
	...props
}: AdjustmentsHorizontalIconProps) => {
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
				strokeWidth={1}
				stroke="currentColor"
				width={size}
				height={size}
			>
				<motion.path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5"
					animate={controls}
					variants={ADJUSTMENTS_HORIZONTAL_VARIANTS_PATH_1}
				/>
				<motion.path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M16.5 12h3.75M16.5 12a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0M3.75 12h9.75"
					animate={controls}
					variants={ADJUSTMENTS_HORIZONTAL_VARIANTS_PATH_2}
				/>
				<motion.path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M10.5 18h9.75M10.5 18a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0M3.75 18H7.5"
					animate={controls}
					variants={ADJUSTMENTS_HORIZONTAL_VARIANTS_PATH_3}
				/>
			</svg>
		</div>
	);
};

AdjustmentsHorizontalIcon.displayName = "AdjustmentsHorizontalIcon";
export { AdjustmentsHorizontalIcon };
