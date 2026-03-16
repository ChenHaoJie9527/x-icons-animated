import { motion } from "motion/react";
import { use, useMemo, useRef } from "react";
import { defaultTimelineOptions } from "@/constants";
import { TimelineRootContext } from "@/context";
import type { TimelineItemInput, TimelineProps } from "@/types";
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

	return (
		<Component
			{...(componentProps as Record<string, unknown>)}
			initial={variant.initial}
			animate={variant.animate}
			transition={variant.transition}
			className={className}
		>
			{children}
		</Component>
	);
};

export const timelineDefaults = defaultTimelineOptions;
