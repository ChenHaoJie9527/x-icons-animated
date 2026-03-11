"use client";

import { cn } from "@x-icons/utils/cn";
import type { Variants } from "motion/react";
import { motion } from "motion/react";
import type { HTMLAttributes, Ref } from "react";
import { useImperativeHandle } from "react";
import { useIconHoverAnimation } from "@/hooks/use-icon-hover-animation";
import type { IconAnimationHandle } from "@/lib/icon-types";

interface BellRingIconProps extends HTMLAttributes<HTMLDivElement> {
	size?: number;
	ref?: Ref<BellRingIconHandle>;
}

const BELL_RING_VARIANTS: Variants = {
	normal: {
		rotate: 0,
		x: 0,
		transition: {
			duration: 0.2,
			ease: "easeOut",
		},
	},
	animate: {
		rotate: [0, -14, 12, -10, 8, -6, 4, -2, 0],
		x: [0, -0.6, 0.6, -0.5, 0.4, -0.3, 0.2, -0.1, 0],
		transition: {
			duration: 1.05,
			ease: "easeInOut",
			times: [0, 0.12, 0.24, 0.38, 0.54, 0.7, 0.82, 0.92, 1],
		},
	},
};

const RING_WAVE_VARIANTS: Variants = {
	normal: {
		opacity: 0.7,
		pathLength: 1,
		transition: {
			duration: 0.2,
		},
	},
	animate: {
		opacity: [0.25, 1, 0.45, 0.95, 0.6],
		pathLength: [0.65, 1, 0.8, 1, 0.9],
		transition: {
			duration: 1.05,
			ease: "easeInOut",
			times: [0, 0.2, 0.45, 0.7, 1],
		},
	},
};

export interface BellRingIconHandle extends IconAnimationHandle {}

const BellRingIcon = ({
	size = 32,
	color = "currentColor",
	className,
	onMouseEnter,
	onMouseLeave,
	ref,
	...props
}: BellRingIconProps) => {
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
			<motion.svg
				xmlns="http://www.w3.org/2000/svg"
				width={size}
				height={size}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1"
				strokeLinecap="round"
				strokeLinejoin="round"
				animate={controls}
				variants={BELL_RING_VARIANTS}
				style={{ transformOrigin: "50% 22%" }}
			>
				<path d="M10.268 21a2 2 0 0 0 3.464 0" />
				<motion.path d="M22 8c0-2.3-.8-4.3-2-6" variants={RING_WAVE_VARIANTS} />
				<path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
				<motion.path d="M4 2C2.8 3.7 2 5.7 2 8" variants={RING_WAVE_VARIANTS} />
			</motion.svg>
		</div>
	);
};

BellRingIcon.displayName = "BellRingIcon";
export { BellRingIcon };
