"use client";

import { v } from "@x-icons/motion-kit/compose";
import { rotate, withTransition } from "@x-icons/motion-kit/primitives";
import type { IconMotionHandle } from "@x-icons/motion-kit/use-icon-motion-kit";
import { useIconMotionKit } from "@x-icons/motion-kit/use-icon-motion-kit";
import { cn } from "@x-icons/utils/cn";
import { motion } from "motion/react";
import type { HTMLAttributes, Ref } from "react";
import { useImperativeHandle } from "react";

const CANCEL_1_VARIANTS = v(
	rotate(0, 120),
	withTransition({
		duration: 0.5,
		ease: "easeInOut",
	})
);

export interface Cancel1IconHandle extends IconMotionHandle {}

interface Cancel1IconProps extends HTMLAttributes<HTMLDivElement> {
	ref?: Ref<Cancel1IconHandle>;
	size?: number;
	color?: string;
}
const Cancel1Icon = ({
	size = 32,
	color = "currentColor",
	className,
	onMouseEnter,
	onMouseLeave,
	ref,
	...props
}: Cancel1IconProps) => {
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
					variants={CANCEL_1_VARIANTS}
					d="M18 6L6.00081 17.9992M17.9992 18L6 6.00085"
				/>
			</svg>
		</div>
	);
};

Cancel1Icon.displayName = "Cancel1Icon";
export { Cancel1Icon };
