"use client";
import type { HTMLAttributes, Ref } from "react";
import { useImperativeHandle } from "react";
import type { IconAnimationHandle } from "@/lib/icon-types";
import { useIconHoverAnimation } from "@/hooks/use-icon-hover-animation";
import { cn } from "@x-icons/utils/cn";
import { motion } from "motion/react";

export interface ArrowDownCircleIconHandle extends IconAnimationHandle {}

interface ArrowDownCircleIconProps extends HTMLAttributes<HTMLDivElement> {
	size?: number;
	ref?: Ref<ArrowDownCircleIconHandle>;
}

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
					d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
				/>
			</svg>
		</div>
	);
};

export { ArrowDownCircleIcon };