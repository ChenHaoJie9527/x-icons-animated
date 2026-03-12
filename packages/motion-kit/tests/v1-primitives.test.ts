import { fade } from "../src/primitives";
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

		it("当提供参数时使用参数值", () => {
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
});
