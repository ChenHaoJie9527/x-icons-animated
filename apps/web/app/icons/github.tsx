"use client";
import { cn } from "@x-icons/utils/cn";
import type { Variants } from "motion/react";
import { motion } from "motion/react";
import type { HTMLAttributes, Ref } from "react";
import { useImperativeHandle } from "react";
import { useIconHoverAnimation } from "@/hooks/use-icon-hover-animation";
import type { IconAnimationHandle } from "@/lib/icon-types";

export interface GithubIconHandle extends IconAnimationHandle {}

interface GithubIconProps extends HTMLAttributes<HTMLDivElement> {
	size?: number;
	ref?: Ref<GithubIconHandle>;
}

const BRANCH_VARIANTS: Variants = {
	normal: {
		rotate: 0,
		transition: {
			duration: 0.3,
		},
	},
	animate: {
		rotate: [0, -35, 0],
		transition: {
			duration: 0.3,
			ease: "easeInOut",
			repeat: 1,
		},
	},
};

const GithubIcon = ({
	size = 24,
	color = "currentColor",
	className,
	onMouseEnter,
	onMouseLeave,
	ref,
	...props
}: GithubIconProps) => {
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
				viewBox="0 0 24 24"
				width="24"
				height="24"
			>
				<motion.path
					d="M9 19c-4.3 1.4-4.3-2.5-6-3"
					fill="none"
					stroke="currentColor"
					strokeWidth="1"
					strokeLinecap="round"
					strokeLinejoin="round"
					variants={BRANCH_VARIANTS}
					animate={controls}
				/>
				<motion.path
					d="M15 21v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21"
					fill="none"
					stroke="currentColor"
					strokeWidth="1"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</div>
	);
};

GithubIcon.displayName = "github";

export { GithubIcon };
