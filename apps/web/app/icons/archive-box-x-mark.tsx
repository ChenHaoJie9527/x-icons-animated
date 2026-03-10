"use client";

import { cn } from "@x-icons/utils/cn";
import type { Variants } from "motion/react";
import { motion } from "motion/react";
import type { HTMLAttributes, Ref } from "react";
import { useImperativeHandle } from "react";
import { useIconHoverAnimation } from "@/hooks/use-icon-hover-animation";
import type { IconAnimationHandle } from "@/lib/icon-types";

export interface ArchiveBoxXMarkIconHandle extends IconAnimationHandle {}

interface ArchiveBoxXMarkIconProps extends HTMLAttributes<HTMLDivElement> {
	size?: number;
	ref?: Ref<ArchiveBoxXMarkIconHandle>;
}

const ARCHIVE_BOX_X_MARK_VARIANTS_PATH_1: Variants = {
	normal: {
		pathLength: 1,
		pathOffset: 0,
	},
	animate: {
		pathLength: [0, 1],
		pathOffset: [1, 0],
		transition: {
			duration: 0.3,
			ease: "easeInOut",
		},
	},
};

const ARCHIVE_BOX_X_MARK_VARIANTS_PATH_2: Variants = {
	normal: {
		opacity: 1,
	},
	animate: {
		opacity: [0, 1],
		transition: {
			duration: 0.3,
			ease: "easeInOut",
			delay: 0.2,
		},
	},
};

const ArchiveBoxXMarkIcon = ({
	size = 32,
	className,
	onMouseEnter,
	onMouseLeave,
	ref,
	...props
}: ArchiveBoxXMarkIconProps) => {
	const { controls, handleMouseEnter, handleMouseLeave } =
		useIconHoverAnimation({ ref, onMouseEnter, onMouseLeave });
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
				strokeWidth="1"
				stroke="currentColor"
				width={size}
				height={size}
			>
				<motion.path
					animate={controls}
					variants={ARCHIVE_BOX_X_MARK_VARIANTS_PATH_1}
					strokeLinecap="round"
					strokeLinejoin="round"
					d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
				/>
				<motion.path
					animate={controls}
					variants={ARCHIVE_BOX_X_MARK_VARIANTS_PATH_2}
					strokeLinecap="round"
					strokeLinejoin="round"
					d="m9.75 11.625 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25"
				/>
			</svg>
		</div>
	);
};

ArchiveBoxXMarkIcon.displayName = "ArchiveBoxXMarkIcon";
export { ArchiveBoxXMarkIcon };
