import { use, useCallback, useImperativeHandle, useMemo, useRef } from "react";
import type { Ref, MouseEventHandler, MouseEvent } from "react";
import { AnimationTimelineContext } from "./context";
import type { TimelineDefaults } from "./types";
import { mergeDefaults } from "./utils";
import { useAnimation } from "motion/react";

export const useAnimationTimeline = (
	overrides?: Partial<TimelineDefaults>
): TimelineDefaults => {
	const contextValue = use(AnimationTimelineContext);
	if (!contextValue) {
		throw new Error(
			"useAnimationTimeline must be used within AnimationTimelineProvider"
		);
	}

	return useMemo(
		() => mergeDefaults(contextValue, overrides),
		[contextValue, overrides]
	);
};

export interface IconAnimationTimelineHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}

interface UseIconHoverAnimationParams {
	ref?: Ref<IconAnimationTimelineHandle>;
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
