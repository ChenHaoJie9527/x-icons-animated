import { use, useMemo } from "react";
import type { TimelineDefaults } from "./types";
import { animationTimelineContext } from "./context";
import { mergeDefaults } from "@/utils";

export const useAnimationTimeline = (
	overrides?: Partial<TimelineDefaults>
): TimelineDefaults => {
	const contextValue = use(animationTimelineContext);
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
