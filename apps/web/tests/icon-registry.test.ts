import { describe, expect, it } from "vitest";
import { ICON_LIST } from "@/lib/icon-registry";

describe("ICON_LIST", () => {
	it("keeps icon names sorted", () => {
		const names = ICON_LIST.map((iconMeta) => iconMeta.name);
		const sortedNames = [...names].sort((a, b) => a.localeCompare(b));

		expect(names).toEqual(sortedNames);
	});

	it("contains github icon entry", () => {
		expect(ICON_LIST.some((iconMeta) => iconMeta.name === "github")).toBe(true);
	});
});
