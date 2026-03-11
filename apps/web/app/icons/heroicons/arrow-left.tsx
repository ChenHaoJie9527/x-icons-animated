"use client";
import { cn } from "@x-icons/utils/cn";
import type { Variants } from "motion/react";
import { motion } from "motion/react";
import type { HTMLAttributes, Ref } from "react";
import { useImperativeHandle } from "react";
import { useIconHoverAnimation } from "@/hooks/use-icon-hover-animation";
import type { IconAnimationHandle } from "@/lib/icon-types";

export interface ArrowLeftIconHandle extends IconAnimationHandle {}

interface ArrowLeftIconProps extends HTMLAttributes<HTMLDivElement> {
	size?: number;
	ref?: Ref<ArrowLeftIconHandle>;
}

const ARROW_LEFT_VARIANTS: Variants = {
	normal: {
		x: 0,
	},
	animate: {
		x: [0, -3, 0, -1, 0],
		transition: {
			times: [0, 0.4, 0.6],
			duration: 0.5,
			ease: "easeInOut",
		},
	},
};

const ArrowLeftIcon = ({
	size = 32,
	color = "currentColor",
	className,
	onMouseEnter,
	onMouseLeave,
	ref,
	...props
}: ArrowLeftIconProps) => {
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
				color="currentColor"
				width={size}
				height={size}
			>
				<motion.path
					animate={controls}
					variants={ARROW_LEFT_VARIANTS}
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
				/>
			</svg>
		</div>
	);
};

ArrowLeftIcon.displayName = "ArrowLeftIcon";
export { ArrowLeftIcon };
