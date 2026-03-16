import { expect, test } from "@playwright/test";

test("playground renders 3x3 grid layout", async ({ page }) => {
	await page.goto("/");

	for (let index = 1; index <= 9; index += 1) {
		await expect(page.getByTestId(`grid-cell-${index}`)).toBeVisible();
	}

	await expect(page.getByText("Grid Cell 1")).toBeVisible();
	await expect(page.getByText("Grid Cell 9")).toBeVisible();
});
