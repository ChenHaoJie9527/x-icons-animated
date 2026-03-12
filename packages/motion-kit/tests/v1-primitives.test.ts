import { fade, rotate, scaleXY, translateX, translateY } from "../src/primitives";
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

	describe("translateX", () => {
		it("当提供参数时使用参数值作为目标值", () => {
			expect(translateX(0, 12)).toEqual({
				normal: {
					x: 0,
				},
				animate: {
					x: 12,
				},
			});
		});

		it("第二个参数为数组时使用数组中的值作为目标值", () => {
			expect(translateX(0, [0, 12, 24])).toEqual({
				normal: {
					x: 0,
				},
				animate: {
					x: [0, 12, 24],
				},
			});
		});
	});

	describe("translateY", () => {
		it("当提供参数时使用参数值作为目标值", () => {
			expect(translateY(0, 8)).toEqual({
				normal: { y: 0 },
				animate: { y: 8 },
			});
		});
		it("第二个参数为数组时使用数组中的值作为目标值", () => {
			expect(translateY(0, [0, -1, 1, 0])).toEqual({
				normal: { y: 0 },
				animate: { y: [0, -1, 1, 0] },
			});
		});
	});

	describe("scaleXY", () => {
		it("当提供参数时使用参数值作为目标值", () => {
			expect(scaleXY(1, 1.2, 1, 0.8)).toEqual({
				normal: { scaleX: 1, scaleY: 1 },
				animate: { scaleX: 1.2, scaleY: 0.8 },
			});
		});
		it("第二个参数为数组时使用数组中的值作为目标值", () => {
			expect(scaleXY(1, [1, 0.9, 1.1, 1], 1, [1, 1.1, 0.9, 1])).toEqual({
				normal: { scaleX: 1, scaleY: 1 },
				animate: {
					scaleX: [1, 0.9, 1.1, 1],
					scaleY: [1, 1.1, 0.9, 1],
				},
			});
		});
	});
});
