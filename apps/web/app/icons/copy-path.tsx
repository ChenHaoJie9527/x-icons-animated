"use client";
import { cn } from "@x-icons/utils/cn";
import type { Variants } from "motion/react";
import { motion } from "motion/react";
import type { HTMLAttributes, Ref } from "react";
import { useImperativeHandle } from "react";
import { useIconHoverAnimation } from "@/hooks/use-icon-hover-animation";
import type { IconAnimationHandle } from "@/lib/icon-types";

export interface CopyPathIconHandle extends IconAnimationHandle {}
interface CopyPathIconProps extends HTMLAttributes<HTMLDivElement> {
	size?: number;
	ref?: Ref<CopyPathIconHandle>;
}

const COPY_PATH_VARIANTS: Variants = {
	normal: {
		rotate: 0,
		transition: {
			duration: 0.2,
			ease: "easeInOut",
		},
	},
    animate: {
        rotate: 360,
        transition: {
            duration: 1.2,
            ease: "linear",
        }
    }
};

const CopyPathIcon = ({
	size = 32,
	className,
	onMouseEnter,
	onMouseLeave,
	ref,
	...props
}: CopyPathIconProps) => {
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
				strokeWidth={1.5}
				stroke="currentColor"
				width={size}
				height={size}
			>
				<motion.path
					animate={controls}
					variants={COPY_PATH_VARIANTS}
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
				/>
			</svg>
		</div>
	);
};

CopyPathIcon.displayName = "CopyPathIcon";
export { CopyPathIcon };
