import { motion, useAnimation } from "motion/react";
import { use, useEffect, useMemo, useRef } from "react";
import { defaultTimelineOptions } from "@/constants";
import { TimelineRootContext } from "@/context";
import type {
	TimelineItemController,
	TimelineItemInput,
	TimelineProps,
} from "@/types";
import { buildTimelineVariant } from "@/utils";

export const Timeline = ({
	as: Component = motion.div,
	children,
	at,
	index,
	direction,
	distance,
	duration,
	ease,
	className,
	...componentProps
}: TimelineProps) => {
	const rootValue = use(TimelineRootContext);
	if (!rootValue) {
		throw new Error("Timeline must be used within TimelineRoot");
	}

	const resolvedIndexRef = useRef<number | null>(null);
	if (resolvedIndexRef.current === null) {
		resolvedIndexRef.current = rootValue.nextIndex();
	}
	const itemId = resolvedIndexRef.current;
	const controls = useAnimation();

	const variant = useMemo(() => {
		const input: TimelineItemInput = {
			at,
			index,
			direction,
			distance,
			duration,
			ease,
		};

		return buildTimelineVariant(
			rootValue.defaults,
			input,
			resolvedIndexRef.current ?? 0
		);
	}, [rootValue.defaults, at, index, direction, distance, duration, ease]);

	const itemController = useMemo<TimelineItemController>(
		() => ({
			start: () =>
				controls.start({
					...variant.animate,
					transition: variant.transition,
				}),
			stop: () => controls.stop(),
			reset: () => controls.set(variant.initial),
		}),
		[controls, variant]
	);

	useEffect(() => {
		return rootValue.registerItem(itemId, itemController);
	}, [rootValue, itemId, itemController]);

	useEffect(() => {
		itemController.reset();
		if (rootValue.autoPlay) {
			itemController.start();
		}
	}, [itemController, rootValue.autoPlay]);

	return (
		<Component
			{...(componentProps as Record<string, unknown>)}
			initial={variant.initial}
			animate={controls}
			className={className}
		>
			{children}
		</Component>
	);
};

export const timelineDefaults = defaultTimelineOptions;
