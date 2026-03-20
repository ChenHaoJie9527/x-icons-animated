"use client";
import { v } from "@x-icons/motion-kit/compose";
import {
	pathLength,
	pathOffset,
	withTransition,
} from "@x-icons/motion-kit/primitives";
import type { IconMotionHandle } from "@x-icons/motion-kit/use-icon-motion-kit";
import { useIconMotionKit } from "@x-icons/motion-kit/use-icon-motion-kit";
import { cn } from "@x-icons/utils/cn";
import { motion } from "motion/react";
import type { HTMLAttributes, Ref } from "react";
import { useImperativeHandle } from "react";

const ARROW_PATH_ROUNDED_SQUARE_VARIANTS_1 = v(
	pathLength(1, [0, 1]),
	pathOffset(0, [1, 0]),
	withTransition({
		duration: 0.5,
		ease: "easeInOut",
	})
);

const ARROW_PATH_ROUNDED_SQUARE_VARIANTS_2 = v(
	pathLength(1, [0, 1]),
	pathOffset(0, [1, 0]),
	withTransition({
		duration: 0.5,
		ease: "easeInOut",
	})
);
export interface ArrowPathRoundedSquareIconHandle extends IconMotionHandle {}

interface ArrowPathRoundedSquareIconProps
	extends HTMLAttributes<HTMLDivElement> {
	size?: number;
	ref?: Ref<ArrowPathRoundedSquareIconHandle>;
}

const ArrowPathRoundedSquareIcon = ({
	size = 32,
	className,
	onMouseEnter,
	onMouseLeave,
	ref,
	...props
}: ArrowPathRoundedSquareIconProps) => {
	const { controls, handleMouseEnter, handleMouseLeave } = useIconMotionKit({
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
					animate={controls}
					variants={ARROW_PATH_ROUNDED_SQUARE_VARIANTS_1}
					d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3"
				/>
				<motion.path
					strokeLinecap="round"
					strokeLinejoin="round"
					animate={controls}
					variants={ARROW_PATH_ROUNDED_SQUARE_VARIANTS_2}
					d="M4.5 12c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
				/>
			</motion.svg>
		</div>
	);
};

ArrowPathRoundedSquareIcon.displayName = "ArrowPathRoundedSquareIcon";

export { ArrowPathRoundedSquareIcon };
