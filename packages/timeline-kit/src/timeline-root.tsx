import type { ReactNode } from "react";
import { useMemo, useRef } from "react";
import { timelineRootContext } from "./context";
import { useAnimationTimeline } from "./hooks";
import type { TimelineDefaults, TimelineRootContextValue } from "./types";

export const TimelineRoot = ({
	children,
	value,
}: {
	children: ReactNode;
	value?: Partial<TimelineDefaults>;
}) => {
	const defaults = useAnimationTimeline(value);
	const indexRef = useRef(0);

	const rootContextValue = useMemo<TimelineRootContextValue>(
		() => ({
			defaults,
			nextIndex: () => {
				const current = indexRef.current;
				indexRef.current += 1;
				return current;
			},
		}),
		[defaults]
	);

	return (
		<timelineRootContext.Provider value={rootContextValue}>
			{children}
		</timelineRootContext.Provider>
	);
};
