import { createContext } from "react";
import type { TimelineDefaults, TimelineRootContextValue } from "./types";

export const AnimationTimelineContext = createContext<TimelineDefaults | null>(
	null
);

export const TimelineRootContext =
	createContext<TimelineRootContextValue | null>(null);
