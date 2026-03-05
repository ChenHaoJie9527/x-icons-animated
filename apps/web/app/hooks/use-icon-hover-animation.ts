"use client";

import { useAnimation } from "motion/react";
import type { MouseEvent, MouseEventHandler, Ref } from "react";
import { useCallback, useImperativeHandle, useRef } from "react";
import type { IconAnimationHandle } from "@/lib/icon-types";

interface UseIconHoverAnimationParams {
	ref?: Ref<IconAnimationHandle>;
	onMouseEnter?: MouseEventHandler<HTMLDivElement>;
	onMouseLeave?: MouseEventHandler<HTMLDivElement>;
}

export function useIconHoverAnimation({
	ref,
	onMouseEnter,
	onMouseLeave,
}: UseIconHoverAnimationParams): {
	controls: ReturnType<typeof useAnimation>;
	handleMouseEnter: (e: MouseEvent<HTMLDivElement>) => void;
	handleMouseLeave: (e: MouseEvent<HTMLDivElement>) => void;
} {
	const controls = useAnimation();
	const isControlledRef = useRef(false);
	useImperativeHandle(ref, () => {
		isControlledRef.current = true;

		return {
			startAnimation: () => controls.start("animate"),
			stopAnimation: () => controls.start("normal"),
		};
	});

	const handleMouseEnter = useCallback(
		(e: MouseEvent<HTMLDivElement>) => {
			if (isControlledRef.current) {
				onMouseEnter?.(e);
			} else {
				controls.start("animate");
			}
		},
		[controls, onMouseEnter]
	);

	const handleMouseLeave = useCallback(
		(e: MouseEvent<HTMLDivElement>) => {
			if (isControlledRef.current) {
				onMouseLeave?.(e);
			} else {
				controls.start("normal");
			}
		},
		[controls, onMouseLeave]
	);

	return {
		controls,
		handleMouseEnter,
		handleMouseLeave,
	};
}
