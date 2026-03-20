"use client";
import { v } from "@x-icons/motion-kit/compose";
import {
	fade,
	pathLength,
	pathOffset,
	scaleXY,
	withTransition,
} from "@x-icons/motion-kit/primitives";
import type { IconMotionHandle } from "@x-icons/motion-kit/use-icon-motion-kit";
import { useIconMotionKit } from "@x-icons/motion-kit/use-icon-motion-kit";
import { cn } from "@x-icons/utils/cn";
import { motion } from "motion/react";
import type { HTMLAttributes, Ref } from "react";
import { useImperativeHandle } from "react";

export interface AddCircleIconHandle extends IconMotionHandle {}

interface AddCircleIconProps extends HTMLAttributes<HTMLDivElement> {
	ref?: Ref<AddCircleIconHandle>;
	size?: number;
	color?: string;
}

const ADD_CIRCLE_VARIANTS_1 = v(
	pathLength(1, [0, 1]),
	pathOffset(0, [1, 0]),
	withTransition({
		duration: 0.3,
		ease: "easeInOut",
	})
);

const ADD_CIRCLE_VARIANTS_2 = v(
	fade(1, [0, 1]),
	scaleXY(1, [0.5, 1.2, 1, 1.2, 1], 1, [0.5, 1.2, 1, 1.2, 1]),
	withTransition({
		duration: 0.3,
		ease: "easeInOut",
		times: [0, 0.2, 0.4, 0.6, 1],
		delay: 0.3,
	})
);

const AddCircleIcon = ({
	size = 32,
	color = "currentColor",
	className,
	onMouseEnter,
	onMouseLeave,
	ref,
	...props
}: AddCircleIconProps) => {
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
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={size}
				height={size}
				fill="none"
				stroke={color}
				strokeWidth="1"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<motion.path
					animate={controls}
					variants={ADD_CIRCLE_VARIANTS_1}
					d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
				/>
				<motion.path
					animate={controls}
					variants={ADD_CIRCLE_VARIANTS_2}
					d="M12 8V16M16 12H8"
				/>
			</svg>
		</div>
	);
};

AddCircleIcon.displayName = "AddCircleIcon";
export { AddCircleIcon };
