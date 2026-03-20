"use client";
import { v } from "@x-icons/motion-kit/compose";
import { fade, scaleXY, withTransition } from "@x-icons/motion-kit/primitives";
import type { IconMotionHandle } from "@x-icons/motion-kit/use-icon-motion-kit";
import { useIconMotionKit } from "@x-icons/motion-kit/use-icon-motion-kit";
import { cn } from "@x-icons/utils/cn";
import { motion } from "motion/react";
import type { HTMLAttributes, Ref } from "react";
import { useImperativeHandle } from "react";

export interface RssIconHandle extends IconMotionHandle {}
export interface RssIconProps extends HTMLAttributes<HTMLDivElement> {
	size?: number;
	color?: string;
	ref?: Ref<RssIconHandle>;
}

const RSS_VARIANTS_1 = v(
	fade(1, [0, 1]),
	scaleXY(1, [0.8, 1], 1, [0.8, 1]),
	withTransition({
		duration: 0.3,
		ease: "easeInOut",
	})
);

const RSS_VARIANTS_2 = v(
	fade(1, [0, 1]),
	scaleXY(1, [0.8, 1], 1, [0.8, 1]),
	withTransition({
		duration: 0.3,
		ease: "easeInOut",
		delay: 0.2,
	})
);
const RSS_VARIANTS_3 = v(
	fade(1, [0, 1]),
	scaleXY(1, [0.8, 1], 1, [0.8, 1]),
	withTransition({
		duration: 0.3,
		ease: "easeInOut",
		delay: 0.3,
	})
);
const RssIcon = ({
	size = 32,
	color = "currentColor",
	className,
	onMouseEnter,
	onMouseLeave,
	ref,
	...props
}: RssIconProps) => {
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
				stroke={color}
				width={size}
				height={size}
				strokeLinecap="round"
				strokeLinejoin="round"
				animate={controls}
			>
				<motion.path
					animate={controls}
					d="M4.5 4.5h.75c7.87 0 14.25 6.38 14.25 14.25v.75"
					variants={RSS_VARIANTS_3}
				/>
				<motion.path
					animate={controls}
					d="M12.75 19.5v-.75a7.5 7.5 0 0 0-7.5-7.5H4.5"
					variants={RSS_VARIANTS_2}
				/>
				<motion.path
					animate={controls}
					d="M6 18.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
					variants={RSS_VARIANTS_1}
				/>
			</motion.svg>
		</div>
	);
};
RssIcon.displayName = "RssIcon";
export { RssIcon };
