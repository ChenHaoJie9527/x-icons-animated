"use client";

import { cn } from "@x-icons/utils/cn";
import type { Variants } from "motion/react";
import { motion } from "motion/react";
import type { HTMLAttributes, Ref } from "react";
import { useImperativeHandle } from "react";
import { useIconHoverAnimation } from "@/hooks/use-icon-hover-animation";
import type { IconAnimationHandle } from "@/lib/icon-types";

export interface AdjustmentsVerticalIconHandle extends IconAnimationHandle {}

interface AdjustmentsVerticalIconProps extends HTMLAttributes<HTMLDivElement> {
	size?: number;
	ref?: Ref<AdjustmentsVerticalIconHandle>;
}

const ADJUSTMENTS_VERTICAL_VARIANTS_PATH_1: Variants = {
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

const ADJUSTMENTS_VERTICAL_VARIANTS_PATH_2: Variants = {
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

const ADJUSTMENTS_VERTICAL_VARIANTS_PATH_3: Variants = {
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

const AdjustmentsVerticalIcon = ({
	size = 32,
	className,
	onMouseEnter,
	onMouseLeave,
	ref,
	...props
}: AdjustmentsVerticalIconProps) => {
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
					d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5"
					animate={controls}
					variants={ADJUSTMENTS_VERTICAL_VARIANTS_PATH_1}
				/>
				<motion.path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 7.5V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
					animate={controls}
					variants={ADJUSTMENTS_VERTICAL_VARIANTS_PATH_2}
				/>
				<motion.path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M18 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5"
					animate={controls}
					variants={ADJUSTMENTS_VERTICAL_VARIANTS_PATH_3}
				/>
			</svg>
		</div>
	);
};

AdjustmentsVerticalIcon.displayName = "AdjustmentsVerticalIcon";
export { AdjustmentsVerticalIcon };
