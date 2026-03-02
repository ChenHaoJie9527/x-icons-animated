"use client";

import { motion } from "motion/react";
import type { HTMLAttributes, Ref } from "react";
import { cn } from "@x-icons/utils/cn";

import {
	useIconHoverAnimation,
	type IconAnimationHandle,
} from "../hooks/use-icon-hover-animation";

export interface HomeIconHandle extends IconAnimationHandle {}

interface HomeIconProps extends HTMLAttributes<HTMLDivElement> {
	size?: number;
	ref?: Ref<HomeIconHandle>;
}

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
			<svg
				aria-label="File Text Icon"
				fill="none"
				height={size}
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				viewBox="0 0 24 24"
				width={size}
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
				<motion.path
					animate={controls}
					d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"
				/>
			</svg>
		</div>
	);
}

HomeIcon.displayName = "HomeIcon";

export { HomeIcon };
