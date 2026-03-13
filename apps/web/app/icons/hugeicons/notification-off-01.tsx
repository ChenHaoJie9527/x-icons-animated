"use client";

import { composeVariants } from "@x-icons/motion-kit/compose";
import {
	fade,
	pathLength,
	pathOffset,
	rotate,
	translateX,
	withTransition,
} from "@x-icons/motion-kit/primitives";
import type { IconMotionHandle } from "@x-icons/motion-kit/use-icon-motion-kit";
import { useIconMotionKit } from "@x-icons/motion-kit/use-icon-motion-kit";
import { cn } from "@x-icons/utils/cn";
import type { Variants } from "motion/react";
import { motion } from "motion/react";
import type { HTMLAttributes, Ref } from "react";
import { useImperativeHandle } from "react";

export interface NotificationOff01IconHandle extends IconMotionHandle {}

interface NotificationOff01IconProps extends HTMLAttributes<HTMLDivElement> {
	size?: number;
	ref?: Ref<NotificationOff01IconHandle>;
}

const BELL_SWING_VARIANTS: Variants = composeVariants(
	rotate(0, [0, -12, 10, -8, 6, -4, 2, 0]),
	translateX(0, [0, -0.45, 0.45, -0.3, 0.2, -0.1, 0]),
	withTransition({
		duration: 1,
		ease: "easeInOut",
		times: [0, 0.12, 0.26, 0.42, 0.58, 0.74, 0.88, 1],
	})
);

const SLASH_SWEEP_VARIANTS: Variants = composeVariants(
	pathLength(1, [0, 1]),
	pathOffset(0, [0, 0]),
	fade(1, [0.25, 1]),
	withTransition({
		duration: 0.65,
		ease: "easeOut",
		times: [0, 1],
	})
);

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
			<motion.svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={size}
				height={size}
				fill="none"
				stroke="currentColor"
				strokeWidth="1"
				strokeLinecap="round"
				strokeLinejoin="round"
				animate={controls}
				variants={BELL_SWING_VARIANTS}
			>
				<path d="M18 18H3.5" />
				<path d="M13.5 20C13.5 20.8284 12.8284 21.5 12 21.5M10.5 20C10.5 20.8284 11.1716 21.5 12 21.5M12 21.5V20" />
				<motion.path
					animate={controls}
					variants={SLASH_SWEEP_VARIANTS}
					d="M2 2L22 22"
				/>
				<path d="M5 18V9.5C5 8.20839 5.34981 6.99849 5.95987 5.95987M19 15V9.5C19 5.63401 15.866 2.5 12 2.5C10.4497 2.5 9.01706 3.00399 7.85707 3.85707" />
			</motion.svg>
		</div>
	);
};

NotificationOff01Icon.displayName = "NotificationOff01Icon";
export { NotificationOff01Icon };
