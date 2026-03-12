import { fade, rotate } from "../src/primitives";
import { expect, it, describe } from "vitest";

describe("motion-kit primitives", () => {
	describe("fade", () => {
		it("当未提供参数时使用默认值", () => {
			expect(fade()).toEqual({
				normal: {
					opacity: 1,
				},
				animate: {
					opacity: 1,
				},
			});
		});

		it("当提供参数时使用参数值作为目标值", () => {
			expect(fade(0, 1)).toEqual({
				normal: {
					opacity: 0,
				},
				animate: {
					opacity: 1,
				},
			});
		});
	});

	describe("rotate", () => {
		it("当提供参数时使用参数值作为目标值", () => {
			expect(rotate(0, 45)).toEqual({
				normal: {
					rotate: 0,
				},
				animate: {
					rotate: 45,
				},
			});
		});

		it("第二个参数为数组时使用数组中的值作为目标值", () => {
			expect(rotate(0, [0, 45, 90])).toEqual({
				normal: {
					rotate: 0,
				},
				animate: {
					rotate: [0, 45, 90],
				},
			});
		});
	});
});
