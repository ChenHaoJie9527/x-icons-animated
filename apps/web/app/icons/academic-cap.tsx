"use client";
import { cn } from "@x-icons/utils/cn";
import type { Variants } from "motion/react";
import { motion } from "motion/react";
import type { HTMLAttributes, Ref } from "react";
import { useImperativeHandle } from "react";
import { useIconHoverAnimation } from "@/hooks/use-icon-hover-animation";
import type { IconAnimationHandle } from "@/lib/icon-types";

export interface AcademicCapIconHandle extends IconAnimationHandle {}

interface AcademicCapIconProps extends HTMLAttributes<HTMLDivElement> {
	size?: number;
	ref?: Ref<AcademicCapIconHandle>;
}

const ACADEMIC_CAP_VARIANTS: Variants = {
	normal: {
		x: 0,
		scaleX: 1,
		scaleY: 1,
	},
	animate: {
		// 果冻水瓶手捏：快速横向压缩，释放后阻尼回弹
		x: [0, -0.2, -0.8, 0.5, -0.3, 0.15, -0.08, 0.04, 0],
		scaleX: [1, 0.97, 0.8, 1.1, 0.94, 1.04, 0.98, 1.01, 1],
		scaleY: [1, 1.02, 1.22, 0.9, 1.06, 0.97, 1.02, 0.99, 1],
		transition: {
			duration: 1,
			ease: "easeInOut",
			times: [0, 0.12, 0.24, 0.38, 0.54, 0.7, 0.82, 0.92, 1],
		},
	},
};

const AcademicCapIcon = ({
	size = 32,
	className,
	onMouseEnter,
	onMouseLeave,
	ref,
	...props
}: AcademicCapIconProps) => {
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
					variants={ACADEMIC_CAP_VARIANTS}
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
				/>
			</svg>
		</div>
	);
};

AcademicCapIcon.displayName = "AcademicCapIcon";
export { AcademicCapIcon };
