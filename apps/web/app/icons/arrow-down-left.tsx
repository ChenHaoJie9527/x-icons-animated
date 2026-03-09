"use client";
import { cn } from "@x-icons/utils/cn";
import type { HTMLAttributes, Ref } from "react";
import { useImperativeHandle } from "react";
import { useIconHoverAnimation } from "@/hooks/use-icon-hover-animation";
import type { IconAnimationHandle } from "@/lib/icon-types";
import type { Variants } from "motion/react";
import { motion } from "motion/react";

export interface ArrowDownLeftIconHandle extends IconAnimationHandle {}
interface ArrowDownLeftIconProps extends HTMLAttributes<HTMLDivElement> {
	size?: number;
	ref?: Ref<ArrowDownLeftIconHandle>;
}

const ARROW_DOWN_LEFT_VARIANTS: Variants = {
	normal: {
		x: 0,
		y: 0,
	},
	animate: {
		x: [0, -3, 0, -1, 0],
		y: [0, 3, 0, 1, 0],
		transition: {
			duration: 0.5,
			ease: "easeInOut",
			times: [0, 0.4, 0.6],
		},
	},
};
const ArrowDownLeftIcon = ({
	size = 32,
	className,
	onMouseEnter,
	onMouseLeave,
	ref,
	...props
}: ArrowDownLeftIconProps) => {
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
					animate={controls}
					variants={ARROW_DOWN_LEFT_VARIANTS}
					strokeLinecap="round"
					strokeLinejoin="round"
					d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
				/>
			</svg>
		</div>
	);
};

ArrowDownLeftIcon.displayName = "ArrowDownLeftIcon";
export { ArrowDownLeftIcon };
