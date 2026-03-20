"use client";
import { v } from "@x-icons/motion-kit/compose";
import { fade, scaleXY, withTransition } from "@x-icons/motion-kit/primitives";
import type { IconMotionHandle } from "@x-icons/motion-kit/use-icon-motion-kit";
import { useIconMotionKit } from "@x-icons/motion-kit/use-icon-motion-kit";
import { cn } from "@x-icons/utils/cn";
import { motion } from "motion/react";
import type { HTMLAttributes, Ref } from "react";
import { useImperativeHandle } from "react";

export interface WifiIconHandle extends IconMotionHandle {}

type WifiIconProps = HTMLAttributes<HTMLDivElement> & {
	ref?: Ref<WifiIconHandle>;
	size?: number;
	color?: string;
};

const WIFI_VARIANTS_1 = v(
	fade(1, [0, 1]),
	scaleXY(1, [0.8, 1], 1, [0.8, 1]),
	withTransition({
		duration: 0.2,
		ease: "easeInOut",
	})
);

const WIFI_VARIANTS_2 = v(
	fade(1, [0, 1]),
	scaleXY(1, [0.8, 1], 1, [0.8, 1]),
	withTransition({
		duration: 0.2,
		ease: "easeInOut",
		delay: 0.1,
	})
);

const WIFI_VARIANTS_3 = v(
	fade(1, [0, 1]),
	scaleXY(1, [0.8, 1], 1, [0.8, 1]),
	withTransition({
		duration: 0.2,
		ease: "easeInOut",
		delay: 0.2,
	})
);

const WifiIcon = ({
	size = 32,
	color = "currentColor",
	className,
	onMouseEnter,
	onMouseLeave,
	ref,
	...props
}: WifiIconProps) => {
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
					d="M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0"
					variants={WIFI_VARIANTS_3}
				/>
				<motion.path
					animate={controls}
					d="M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0"
					variants={WIFI_VARIANTS_2}
				/>
				<motion.path
					animate={controls}
					d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0"
					variants={WIFI_VARIANTS_1}
				/>
				<motion.path
					animate={controls}
					d="M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z"
				/>
			</motion.svg>
		</div>
	);
};

WifiIcon.displayName = "WifiIcon";
export { WifiIcon };
