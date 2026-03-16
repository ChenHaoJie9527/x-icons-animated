"use client";

import type { ReactNode } from "react";
import { useMemo } from "react";
import { defaultTimelineOptions } from "./constants";
import { AnimationTimelineContext } from "./context";
import type { TimelineDefaults } from "./types";
import { mergeDefaults } from "./utils";

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
		<AnimationTimelineContext value={merged}>
			{children}
		</AnimationTimelineContext>
	);
};
