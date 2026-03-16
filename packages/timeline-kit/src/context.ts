import { createContext } from "react";
import type { TimelineDefaults, TimelineRootContextValue } from "./types";

export const animationTimelineContext = createContext<TimelineDefaults | null>(
	null
);

export const timelineRootContext =
	createContext<TimelineRootContextValue | null>(null);
