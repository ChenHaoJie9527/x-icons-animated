import { describe, expect, it } from "vitest";
import { v } from "../src/compose";
import { fade, withTransition } from "../src/primitives";
import type { DefaultMotionPatch } from "../src/types";

describe("v", () => {
	it("当未提供补丁时返回空的 normal/animate 对象", () => {
		expect(v()).toEqual({
			normal: {},
			animate: {},
		});
	});

	it("将多个补丁合并到 normal 和 animate 状态", () => {
		const variants = v(fade(0.2, 0.9), {
			normal: { x: 0 },
			animate: { x: 12 },
		});

		expect(variants).toEqual({
			normal: {
				opacity: 0.2,
				x: 0,
			},
			animate: {
				opacity: 0.9,
				x: 12,
			},
		});
	});

	it("当相同的键重复时使用最后一个补丁值", () => {
		const variants = v(fade(0, 1), fade(0.5, 0.8));

		expect(variants).toEqual({
			normal: {
				opacity: 0.5,
			},
			animate: {
				opacity: 0.8,
			},
		});
	});

	it("递归合并 transition 对象字段", () => {
		const transitionA = withTransition({
			duration: 1,
			ease: "easeInOut",
		});
		const transitionB = withTransition({
			times: [0, 0.5, 1],
		});

		const variants = v(transitionA, transitionB);

		expect(variants).toEqual({
			normal: {},
			animate: {
				transition: {
					duration: 1,
					ease: "easeInOut",
					times: [0, 0.5, 1],
				},
			},
		});
	});

	it("覆盖数组的整体值，而非按索引合并", () => {
		const firstPatch: DefaultMotionPatch = {
			animate: { rotate: [0, 10, 0] },
		};
		const secondPatch: DefaultMotionPatch = {
			animate: { rotate: [0, 25, -25, 0] },
		};

		const variants = v(firstPatch, secondPatch);

		expect(variants).toEqual({
			normal: {},
			animate: {
				rotate: [0, 25, -25, 0],
			},
		});
	});

	it("不修改源补丁对象", () => {
		const patchA: DefaultMotionPatch = {
			normal: { opacity: 0.2 },
			animate: { transition: { duration: 0.3 } },
		};
		const patchB: DefaultMotionPatch = {
			animate: { transition: { ease: "easeOut" } },
		};

		v(patchA, patchB);

		expect(patchA).toEqual({
			normal: { opacity: 0.2 },
			animate: { transition: { duration: 0.3 } },
		});
		expect(patchB).toEqual({
			animate: { transition: { ease: "easeOut" } },
		});
	});
});
