import { use, useMemo } from "react";
import { AnimationTimelineContext } from "./context";
import type { TimelineDefaults } from "./types";
import { mergeDefaults } from "./utils";

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
