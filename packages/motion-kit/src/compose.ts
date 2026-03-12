import type { DefaultMotionPatch, MotionTarget, MotionVariants } from "./types";

type InternalTarget = Record<string, unknown>;

const isPlainRecord = (value: unknown): value is Record<string, unknown> => {
	return typeof value === "object" && value !== null && !Array.isArray(value);
};

const mergeTarget = (
	base: InternalTarget,
	patch: InternalTarget
): InternalTarget => {
	const nextTarget: InternalTarget = { ...base };

	for (const key in patch) {
		if (!Object.hasOwn(patch, key)) {
			continue;
		}
		const value = patch[key];
		const previousValue = nextTarget[key];

		if (isPlainRecord(previousValue) && isPlainRecord(value)) {
			nextTarget[key] = mergeTarget(previousValue, value);
			continue;
		}

		nextTarget[key] = value;
	}

	return nextTarget;
};

export const composeVariants = (
	...patches: DefaultMotionPatch[]
): MotionVariants => {
	let normal: InternalTarget = {};
	let animate: InternalTarget = {};

	for (const patch of patches) {
		if (patch.normal) {
			normal = mergeTarget(normal, patch.normal as InternalTarget);
		}
		if (patch.animate) {
			animate = mergeTarget(animate, patch.animate as InternalTarget);
		}
	}

	return {
		normal: normal as MotionTarget,
		animate: animate as MotionTarget,
	};
};
