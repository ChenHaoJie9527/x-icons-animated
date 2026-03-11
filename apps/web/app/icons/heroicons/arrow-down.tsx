"use client";
import { cn } from "@x-icons/utils/cn";
import type { Variants } from "motion/react";
import { motion } from "motion/react";
import type { HTMLAttributes, Ref } from "react";
import { useImperativeHandle } from "react";
import { useIconHoverAnimation } from "@/hooks/use-icon-hover-animation";
import type { IconAnimationHandle } from "@/lib/icon-types";

export interface ArrowDownIconHandle extends IconAnimationHandle {}
interface ArrowDownIconProps extends HTMLAttributes<HTMLDivElement> {
	size?: number;
	ref?: Ref<ArrowDownIconHandle>;
}

const ARROW_DOWN_VARIANTS: Variants = {
	normal: {
		y: 0,
	},
	animate: {
		y: [0, 4, 0, 2, 0],
		transition: {
			duration: 0.5,
			ease: "easeInOut",
			times: [0, 0.4, 0.6],
		},
	},
};
const ArrowDownIcon = ({
	size = 32,
	className,
	onMouseEnter,
	onMouseLeave,
	ref,
	...props
}: ArrowDownIconProps) => {
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
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1}
				stroke="currentColor"
				width={size}
				height={size}
			>
				<motion.path
					animate={controls}
					variants={ARROW_DOWN_VARIANTS}
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
				/>
			</svg>
		</div>
	);
};

ArrowDownIcon.displayName = "ArrowDownIcon";
export { ArrowDownIcon };
