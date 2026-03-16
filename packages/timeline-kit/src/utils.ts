import type {
	AnimationVariant,
	TimelineDefaults,
	TimelineDirection,
	TimelineItemInput,
} from "./types";

export const mergeDefaults = (
	base: TimelineDefaults,
	overrides?: Partial<TimelineDefaults>
): TimelineDefaults => ({
	...base,
	...overrides,
});

/**
 * 解析偏移量
 * @param direction 方向
 * @param distance 距离
 * @returns 偏移量
 */
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

/**
 * 构建时间线变体
 * @param defaults 默认配置
 * @param input 输入配置
 * @param resolvedIndex 已解析的索引
 * @returns 时间线变体
 */
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
