import type { ReactNode, Ref } from "react";
import { useCallback, useImperativeHandle, useMemo, useRef } from "react";
import { TimelineRootContext } from "./context";
import { useAnimationTimeline } from "./hooks";
import type {
	TimelineController,
	TimelineDefaults,
	TimelineItemController,
	TimelineRootContextValue,
} from "./types";

export const TimelineRoot = ({
	children,
	value,
	className,
	autoPlay = true,
	ref,
}: {
	children: ReactNode;
	className?: string;
	value?: Partial<TimelineDefaults>;
	autoPlay?: boolean;
	ref?: Ref<TimelineController>;
}) => {
	const defaults = useAnimationTimeline(value);
	const indexRef = useRef(0);
	const itemControllersRef = useRef<Map<number, TimelineItemController>>(
		new Map()
	);

	const start = useCallback(() => {
		for (const itemController of itemControllersRef.current.values()) {
			itemController.reset();
		}
		for (const itemController of itemControllersRef.current.values()) {
			itemController.start();
		}
	}, []);

	const stop = useCallback(() => {
		for (const itemController of itemControllersRef.current.values()) {
			itemController.stop();
		}
	}, []);

	const reset = useCallback(() => {
		for (const itemController of itemControllersRef.current.values()) {
			itemController.reset();
		}
	}, []);

	const registerItem = useCallback(
		(itemId: number, controller: TimelineItemController) => {
			itemControllersRef.current.set(itemId, controller);
			return () => {
				itemControllersRef.current.delete(itemId);
			};
		},
		[]
	);

	useImperativeHandle(
		ref,
		() => ({
			start,
			stop,
			reset,
		}),
		[start, stop, reset]
	);

	const rootContextValue = useMemo<TimelineRootContextValue>(
		() => ({
			defaults,
			autoPlay,
			registerItem,
			nextIndex: () => {
				const current = indexRef.current;
				indexRef.current += 1;
				return current;
			},
		}),
		[defaults, autoPlay, registerItem]
	);

	return (
		<TimelineRootContext value={rootContextValue}>
			<div className={className}>{children}</div>
		</TimelineRootContext>
	);
};
