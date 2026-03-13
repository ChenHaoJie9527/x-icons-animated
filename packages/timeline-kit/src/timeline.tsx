import { motion } from "motion/react";
import {
	createContext,
	type PropsWithChildren,
	type ReactNode,
	use,
	useMemo,
	useRef,
} from "react";

export type AnimationEase = "easeIn" | "easeOut" | "easeInOut" | "linear";
export type TimelineDirection = "up" | "down" | "left" | "right" | "none";

export type TimelineDefaults = {
	baseTime: number;
	duration: number;
	ease: AnimationEase;
	distance: number;
	stagger: number;
};

export type TimelineItemInput = {
	at?: number;
	index?: number;
	direction?: TimelineDirection;
	distance?: number;
	duration?: number;
	ease?: AnimationEase;
};

export type AnimationVariant = {
	initial: {
		opacity: number;
		x?: number;
		y?: number;
	};
	animate: {
		opacity: number;
		x?: number;
		y?: number;
	};
	transition: {
		duration: number;
		delay: number;
		ease: AnimationEase;
	};
};

const defaultTimelineOptions: TimelineDefaults = {
	baseTime: 0,
	duration: 0.3,
	ease: "easeInOut",
	distance: 20,
	stagger: 0.12,
};

const mergeDefaults = (
	base: TimelineDefaults,
	overrides?: Partial<TimelineDefaults>
): TimelineDefaults => ({
	...base,
	...overrides,
});

const resolveOffset = (
	direction: TimelineDirection,
	distance: number
): { x?: number; y?: number } => {
	switch (direction) {
		case "left":
			return { x: -distance };
		case "right":
			return { x: distance };
		case "up":
			return { y: distance };
		case "down":
			return { y: -distance };
		default:
			return {};
	}
};

export const buildTimelineVariant = (
	defaults: TimelineDefaults,
	input: TimelineItemInput,
	resolvedIndex: number
): AnimationVariant => {
	const direction = input.direction ?? "up";
	const distance = input.distance ?? defaults.distance;
	const duration = input.duration ?? defaults.duration;
	const ease = input.ease ?? defaults.ease;

	const delay =
		defaults.baseTime +
		(input.at ?? 0) +
		(input.index ?? resolvedIndex) * defaults.stagger;

	const offset = resolveOffset(direction, distance);

	return {
		initial: { opacity: 0, ...offset },
		animate: {
			opacity: 1,
			...(offset.x !== undefined ? { x: 0 } : {}),
			...(offset.y !== undefined ? { y: 0 } : {}),
		},
		transition: {
			duration,
			delay,
			ease,
		},
	};
};

const animationTimelineContext = createContext<TimelineDefaults | null>(null);

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

type TimelineRootContextValue = {
	defaults: TimelineDefaults;
	nextIndex: () => number;
};

const timelineRootContext = createContext<TimelineRootContextValue | null>(
	null
);

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

type TimelineProps = PropsWithChildren<
	TimelineItemInput & {
		as?: typeof motion.div;
		[key: string]: unknown;
	}
>;

export const Timeline = ({
	as: Component = motion.div,
	children,
	at,
	index,
	direction,
	distance,
	duration,
	ease,
	...componentProps
}: TimelineProps) => {
	const rootValue = use(timelineRootContext);
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
		>
			{children}
		</Component>
	);
};

export const timelineDefaults = defaultTimelineOptions;
