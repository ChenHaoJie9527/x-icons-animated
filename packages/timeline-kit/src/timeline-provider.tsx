import type { ReactNode } from "react";
import { useMemo } from "react";
import { defaultTimelineOptions } from "./constants";
import { mergeDefaults } from "./utils";
import { animationTimelineContext } from "./context";
import type { TimelineDefaults } from "./types";

export const AnimationTimelineProvider = ({
	children,
	value,
}: {
	children: ReactNode;
	value?: Partial<TimelineDefaults>;
}) => {
	const merged = useMemo(
		() => mergeDefaults(defaultTimelineOptions, value),
		[value]
	);

	return (
		<animationTimelineContext.Provider value={merged}>
			{children}
		</animationTimelineContext.Provider>
	);
};
