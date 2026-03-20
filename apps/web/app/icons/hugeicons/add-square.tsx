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

export interface AddSquareIconHandle extends IconMotionHandle {}

const ADD_SQUARE_VARIANTS_1 = v(
	pathLength(1, [0, 1]),
	pathOffset(0, [0, 0]),
	withTransition({
		duration: 0.3,
		ease: "easeInOut",
	})
);

const ADD_SQUARE_VARIANTS_2 = v(
	fade(1, [0, 1]),
	scaleXY(1, [0.5, 1.2, 1, 1.2, 1], 1, [0.5, 1.2, 1, 1.2, 1]),
	withTransition({
		duration: 0.3,
		ease: "easeInOut",
		times: [0, 0.2, 0.4, 0.6, 1],
		delay: 0.2,
	})
);
interface AddSquareIconProps extends HTMLAttributes<HTMLDivElement> {
	ref?: Ref<AddSquareIconHandle>;
	size?: number;
	color?: string;
}
const AddSquareIcon = ({
	size = 32,
	color = "currentColor",
	className,
	onMouseEnter,
	onMouseLeave,
	ref,
	...props
}: AddSquareIconProps) => {
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
				color="currentColor"
				fill="none"
				stroke={color}
				strokeWidth="1"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<motion.path
					animate={controls}
					variants={ADD_SQUARE_VARIANTS_1}
					d="M2.5 12.0001C2.5 7.52171 2.5 5.28254 3.89124 3.8913C5.28249 2.50005 7.52166 2.50005 12 2.50005C16.4783 2.50005 18.7175 2.50005 20.1088 3.8913C21.5 5.28254 21.5 7.52171 21.5 12.0001C21.5 16.4784 21.5 18.7176 20.1088 20.1088C18.7175 21.5001 16.4783 21.5001 12 21.5001C7.52166 21.5001 5.28249 21.5001 3.89124 20.1088C2.5 18.7176 2.5 16.4784 2.5 12.0001Z"
				/>
				<motion.path
					animate={controls}
					variants={ADD_SQUARE_VARIANTS_2}
					d="M12 8.00005V16.0001M16 12.0001L8 12.0001"
				/>
			</svg>
		</div>
	);
};

AddSquareIcon.displayName = "AddSquareIcon";
export { AddSquareIcon };
