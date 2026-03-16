import type { ReactNode } from "react";
import { useMemo, useRef } from "react";
import { TimelineRootContext } from "./context";
import { useAnimationTimeline } from "./hooks";
import type { TimelineDefaults, TimelineRootContextValue } from "./types";

export const TimelineRoot = ({
	children,
	value,
	className,
}: {
	children: ReactNode;
	className?: string;
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
		<TimelineRootContext value={rootContextValue}>
			<div className={className}>{children}</div>
		</TimelineRootContext>
	);
};
