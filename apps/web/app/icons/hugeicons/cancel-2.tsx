"use client";

import { v } from "@x-icons/motion-kit/compose";
import { rotate, withTransition } from "@x-icons/motion-kit/primitives";
import type { IconMotionHandle } from "@x-icons/motion-kit/use-icon-motion-kit";
import { useIconMotionKit } from "@x-icons/motion-kit/use-icon-motion-kit";
import { cn } from "@x-icons/utils/cn";
import { motion } from "motion/react";
import type { HTMLAttributes, Ref } from "react";
import { useImperativeHandle } from "react";

export interface Cancel2IconHandle extends IconMotionHandle {}

const CANCEL_2_VARIANTS = v(
	rotate(0, 240),
	withTransition({
		duration: 0.5,
		ease: "easeInOut",
	})
);

interface Cancel2IconProps extends HTMLAttributes<HTMLDivElement> {
	ref?: Ref<Cancel2IconHandle>;
	size?: number;
	color?: string;
}
const Cancel2Icon = ({
	size = 32,
	color = "currentColor",
	className,
	onMouseEnter,
	onMouseLeave,
	ref,
	...props
}: Cancel2IconProps) => {
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
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={size}
				height={size}
				color="currentColor"
				fill="none"
				stroke={color}
				strokeWidth="1"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<motion.path
					animate={controls}
					variants={CANCEL_2_VARIANTS}
					d="M5.43212 18.5679C6.00828 19.144 6.94243 19.144 7.51859 18.5679L12.0003 14.0863L16.4814 18.5672C17.0573 19.1431 17.9909 19.1434 18.5672 18.5679C19.144 17.9919 19.1443 17.0573 18.5679 16.4809L14.0868 12L18.5679 7.51913C19.1438 6.94326 19.1441 6.0097 18.5686 5.43346C17.9925 4.85669 17.0578 4.85638 16.4814 5.43278L12.0003 9.91365L7.51859 5.4321C6.94243 4.85597 6.00828 4.85597 5.43212 5.4321C4.85596 6.00823 4.85596 6.94232 5.43212 7.51845L9.91387 12L5.43212 16.4816C4.85596 17.0577 4.85596 17.9918 5.43212 18.5679Z"
				/>
			</svg>
		</div>
	);
};

Cancel2Icon.displayName = "Cancel2Icon";
export { Cancel2Icon };
