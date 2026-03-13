"use client";

import type { IconMotionHandle } from "@x-icons/motion-kit/use-icon-motion-kit";
import { useIconMotionKit } from "@x-icons/motion-kit/use-icon-motion-kit";
import { composeVariants } from "@x-icons/motion-kit/compose";
import {
	pathLength,
	pathOffset,
	withTransition,
	fade,
} from "@x-icons/motion-kit/primitives";
import { motion } from "motion/react";
import { cn } from "@x-icons/utils/cn";
import type { HTMLAttributes, Ref } from "react";
import { useImperativeHandle } from "react";

export interface Alert1IconHandle extends IconMotionHandle {}

const ALERT_1_VARIANTS = composeVariants(
	pathLength(1, [0, 1]),
	pathOffset(0, [0, 0]),
	withTransition({
		duration: 0.5,
		ease: "easeInOut",
		times: [0, 0.5, 1],
	})
);

const ALERT_1_VARIANTS_2 = composeVariants(
	fade(1, [0, 1]),
	withTransition({
		duration: 0.3,
		ease: "easeInOut",
		times: [0, 0.2, 0.4, 0.6, 1],
		delay: 0.3,
	})
);

interface Alert1IconProps extends HTMLAttributes<HTMLDivElement> {
	size?: number;
	ref?: Ref<Alert1IconHandle>;
}

const Alert1Icon = ({
	size = 32,
	color = "currentColor",
	className,
	onMouseEnter,
	onMouseLeave,
	ref,
	...props
}: Alert1IconProps) => {
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
				strokeWidth="1"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<motion.path
					animate={controls}
					variants={ALERT_1_VARIANTS}
					d="M13.9248 21H10.0752C5.44476 21 3.12955 21 2.27636 19.4939C1.42317 17.9879 2.60736 15.9914 4.97574 11.9985L6.90057 8.75333C9.17559 4.91778 10.3131 3 12 3C13.6869 3 14.8244 4.91777 17.0994 8.75332L19.0243 11.9985C21.3926 15.9914 22.5768 17.9879 21.7236 19.4939C20.8704 21 18.5552 21 13.9248 21Z"
				/>
				<motion.path
					animate={controls}
					variants={ALERT_1_VARIANTS_2}
					d="M12 17V12.5M12 8.99828V8.98828"
				/>
			</svg>
		</div>
	);
};

Alert1Icon.displayName = "Alert1Icon";
export { Alert1Icon };
