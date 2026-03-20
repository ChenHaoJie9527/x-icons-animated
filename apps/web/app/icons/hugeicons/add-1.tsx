"use client";
import { v } from "@x-icons/motion-kit/compose";
import { scaleXY, withTransition } from "@x-icons/motion-kit/primitives";
import type { IconMotionHandle } from "@x-icons/motion-kit/use-icon-motion-kit";
import { useIconMotionKit } from "@x-icons/motion-kit/use-icon-motion-kit";
import { cn } from "@x-icons/utils/cn";
import { motion } from "motion/react";
import type { HTMLAttributes, Ref } from "react";
import { useImperativeHandle } from "react";

export interface Add1IconHandle extends IconMotionHandle {}

const ADD_1_VARIANTS = v(
	scaleXY(1, 1.12, 1, 1.12),
	withTransition({
		duration: 0.28,
		ease: "easeInOut",
	})
);

interface Add1IconProps extends HTMLAttributes<HTMLDivElement> {
	ref?: Ref<Add1IconHandle>;
	size?: number;
	color?: string;
}

const Add1Icon = ({
	size = 32,
	color = "currentColor",
	className,
	onMouseEnter,
	onMouseLeave,
	ref,
	...props
}: Add1IconProps) => {
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
				viewBox="0 0 24 24"
				width={size}
				height={size}
				fill="none"
				stroke={color}
				strokeWidth="1"
				strokeLinecap="round"
				strokeLinejoin="round"
				animate={controls}
				variants={ADD_1_VARIANTS}
				style={{ transformOrigin: "12px 12px" }}
			>
				<path d="M12.001 5.00003V19.002" />
				<path d="M19.002 12.002L4.99998 12.002" />
			</motion.svg>
		</div>
	);
};

Add1Icon.displayName = "Add1Icon";
export { Add1Icon };
