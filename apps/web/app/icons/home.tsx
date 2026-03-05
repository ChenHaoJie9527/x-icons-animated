"use client";

import { cn } from "@x-icons/utils/cn";
import { motion } from "motion/react";
import type { HTMLAttributes, Ref } from "react";
import type { Variants } from "motion/react";
import {
	type IconAnimationHandle,
	useIconHoverAnimation,
} from "@/hooks/use-icon-hover-animation";

export interface HomeIconHandle extends IconAnimationHandle {}

interface HomeIconProps extends HTMLAttributes<HTMLDivElement> {
	size?: number;
	ref?: Ref<HomeIconHandle>;
}

const HOME_VARIANTS: Variants = {
	normal: {
		scale: 1,
		rotate: 0,
	},
	animate: {
		scale: [1, 1.1, 1.1, 1.1, 1],
		rotate: [0, -3, 3, -2, 2, -1, 1, 0],
		transition: {
			duration: 0.8,
			ease: "easeInOut",
			times: [0, 0.2, 0.4, 0.6, 1],
		},
	},
};

function HomeIcon({
	size = 28,
	color = "currentColor",
	className,
	onMouseEnter,
	onMouseLeave,
	ref,
	...props
}: HomeIconProps) {
	const { controls, handleMouseEnter, handleMouseLeave } =
		useIconHoverAnimation({
			ref,
			onMouseEnter,
			onMouseLeave,
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
				stroke="currentColor"
				width={size}
				height={size}
				animate={controls}
				variants={HOME_VARIANTS}
			>
				<motion.path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
				/>
			</motion.svg>
		</div>
	);
}

HomeIcon.displayName = "HomeIcon";

export { HomeIcon };
