"use client";

import { useAnimation } from "motion/react";
import type { MouseEvent, MouseEventHandler, Ref } from "react";
import { useCallback, useImperativeHandle, useRef } from "react";
import type { MotionKitOptions } from "./types";

export interface IconMotionHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}

export interface UseIconMotionKitParams extends MotionKitOptions {
	ref?: Ref<IconMotionHandle>;
	onMouseEnter?: MouseEventHandler<HTMLDivElement>;
	onMouseLeave?: MouseEventHandler<HTMLDivElement>;
}

export interface UseIconMotionKitResult {
	controls: ReturnType<typeof useAnimation>;
	start: () => void;
	stop: () => void;
	handleMouseEnter: (event: MouseEvent<HTMLDivElement>) => void;
	handleMouseLeave: (event: MouseEvent<HTMLDivElement>) => void;
}

export const useIconMotionKit = ({
	ref,
	onMouseEnter,
	onMouseLeave,
	playOnHover = true,
}: UseIconMotionKitParams): UseIconMotionKitResult => {
	const controls = useAnimation();
	const isControlledRef = useRef(false);

	const start = useCallback(() => {
		controls.start("animate");
	}, [controls]);

	const stop = useCallback(() => {
		controls.start("normal");
	}, [controls]);

	useImperativeHandle(ref, () => {
		isControlledRef.current = true;
		return {
			startAnimation: start,
			stopAnimation: stop,
		};
	});

	const handleMouseEnter = useCallback(
		(event: MouseEvent<HTMLDivElement>) => {
			if (isControlledRef.current) {
				onMouseEnter?.(event);
				return;
			}
			onMouseEnter?.(event);
			if (playOnHover) {
				start();
			}
		},
		[onMouseEnter, playOnHover, start]
	);

	const handleMouseLeave = useCallback(
		(event: MouseEvent<HTMLDivElement>) => {
			if (isControlledRef.current) {
				onMouseLeave?.(event);
				return;
			}
			onMouseLeave?.(event);
			if (playOnHover) {
				stop();
			}
		},
		[onMouseLeave, playOnHover, stop]
	);

	return {
		controls,
		start,
		stop,
		handleMouseEnter,
		handleMouseLeave,
	};
};
