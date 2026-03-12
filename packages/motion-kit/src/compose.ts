import type { DefaultMotionPatch, MotionTarget, MotionVariants } from "./types";

const isPlainRecord = (value: unknown): value is Record<string, unknown> => {
	return typeof value === "object" && value !== null && !Array.isArray(value);
};

const mergeTarget = (base: MotionTarget, patch: MotionTarget): MotionTarget => {
	const nextTarget: MotionTarget = { ...base };

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
	let normal: MotionTarget = {};
	let animate: MotionTarget = {};

	for (const patch of patches) {
		if (patch.normal) {
			normal = mergeTarget(normal, patch.normal);
		}
		if (patch.animate) {
			animate = mergeTarget(animate, patch.animate);
		}
	}

	return {
		normal,
		animate,
	};
};
