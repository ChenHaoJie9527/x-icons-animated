"use client";
import type { HTMLAttributes, Ref } from "react";
import { useIconHoverAnimation } from "@/hooks/use-icon-hover-animation";
import type { IconAnimationHandle } from "@/lib/icon-types";
import { useImperativeHandle } from "react";
import { cn } from "@x-icons/utils/cn";
import type { Variants } from "motion/react";
import { motion } from "motion/react";

export interface ArrowDownTrayIconHandle extends IconAnimationHandle {}

interface ArrowDownTrayIconProps extends HTMLAttributes<HTMLDivElement> {
	size?: number;
	ref?: Ref<ArrowDownTrayIconHandle>;
}

const ARROW_DOWN_TRAY_VARIANTS_PATH_1: Variants = {
	normal: {
		y: 0,
        opacity: 1,
        scale: 1,
	},
	animate: {
		y: [-2, 0],
        opacity: [0, 1],
        scale: [0.8, 1],
		transition: {
			duration: 0.3,
			ease: "easeInOut",
            delay: 0.3
		},
	},
};

const ARROW_DOWN_TRAY_VARIANTS_PATH_2: Variants = {
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

const ArrowDownTrayIcon = ({
	size = 32,
	className,
	onMouseEnter,
	onMouseLeave,
	ref,
	...props
}: ArrowDownTrayIconProps) => {
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
					variants={ARROW_DOWN_TRAY_VARIANTS_PATH_1}
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
				/>
				<motion.path
					animate={controls}
					variants={ARROW_DOWN_TRAY_VARIANTS_PATH_2}
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5"
				/>
			</svg>
		</div>
	);
};

ArrowDownTrayIcon.displayName = "ArrowDownTrayIcon";
export { ArrowDownTrayIcon };
