"use client";

// import { composeVariants } from "@x-icons/motion-kit/compose";
// import {
// 	fade,
// 	rotate,
// 	translateX,
// 	withTransition,
// } from "@x-icons/motion-kit/primitives";
import type { IconMotionHandle } from "@x-icons/motion-kit/use-icon-motion-kit";
import { useIconMotionKit } from "@x-icons/motion-kit/use-icon-motion-kit";
import { cn } from "@x-icons/utils/cn";
import { useImperativeHandle } from "react";
import { motion } from "motion/react";
import type { HTMLAttributes, Ref } from "react";

export interface NotificationOff01IconHandle extends IconMotionHandle {}

interface NotificationOff01IconProps extends HTMLAttributes<HTMLDivElement> {
	size?: number;
	ref?: Ref<NotificationOff01IconHandle>;
}

const NotificationOff01Icon = ({
	size = 32,
	color = "currentColor",
	className,
	onMouseEnter,
	onMouseLeave,
	ref,
	...props
}: NotificationOff01IconProps) => {
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
				stroke="currentColor"
				stroke-width="1"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<motion.path
					animate={controls}
					d="M15.5 18C15.5 19.933 13.933 21.5 12 21.5C10.067 21.5 8.5 19.933 8.5 18"
				/>
				<motion.path animate={controls} d="M2 2L22 22" />
				<motion.path
					animate={controls}
					d="M21 16.2311C21 15.762 20.8136 15.3121 20.4819 14.9803L19.8787 14.3771C19.3161 13.8145 19 13.0514 19 12.2558V9.5C19 5.634 15.866 2.5 12 2.5C10.4497 2.5 9.01706 3.00399 7.85707 3.85707M4.76887 18C3.79195 18 3 17.208 3 16.2311C3 15.762 3.18636 15.3121 3.51809 14.9803L4.12132 14.3771C4.68393 13.8145 5 13.0514 5 12.2558V9.5C5 8.20839 5.34981 6.99849 5.95987 5.95987L18 18H4.76887Z"
				/>
			</svg>
		</div>
	);
};

NotificationOff01Icon.displayName = "NotificationOff01Icon";
export { NotificationOff01Icon };
