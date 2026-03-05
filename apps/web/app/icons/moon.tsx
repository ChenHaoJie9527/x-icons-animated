"use client";

import { cn } from "@x-icons/utils/cn";
import type { Variants } from "motion/react";
import { motion } from "motion/react";
import type { HTMLAttributes, Ref } from "react";
import { useImperativeHandle } from "react";
import type { IconAnimationHandle } from "@/lib/icon-types";
import { useIconHoverAnimation } from "@/hooks/use-icon-hover-animation";

export interface MoonIconHandle extends IconAnimationHandle {}

interface MoonIconProps extends HTMLAttributes<HTMLDivElement> {
	size?: number;
	ref?: Ref<MoonIconHandle>;
}

const PATH_VARIANTS: Variants = {
	normal: {
		opacity: 1,
		scale: 1,
		rotate: 0,
		transition: {
			duration: 0.3,
		},
	},
	animate: {
		opacity: [0, 0.5, 1], // 透明度0到0.5到1
		scale: [0.6, 1.1, 1], // 缩放1.1倍
		rotate: [0, -15, 0], // 旋转15度
		transition: {
			duration: 0.6, // 动画时间0.6秒
			ease: "easeOut", // 动画效果easeOut
		},
	},
};

const MoonIcon = ({
	size = 24,
	color = "currentColor",
	className,
	onMouseEnter,
	onMouseLeave,
	ref,
	...props
}: MoonIconProps) => {
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
				aria-label="Moon Icon"
				fill="none"
				height={size}
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1"
				viewBox="0 0 24 24"
				width={size}
				xmlns="http://www.w3.org/2000/svg"
			>
				<motion.path
					animate={controls}
					d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
					initial="normal"
					strokeLinecap="round"
					strokeLinejoin="round"
					style={{ originX: "50%", originY: "50%" }}
					variants={PATH_VARIANTS}
				/>
			</svg>
		</div>
	);
};

MoonIcon.displayName = "moon";

export { MoonIcon };
