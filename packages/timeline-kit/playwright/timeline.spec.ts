import { expect, test } from "@playwright/test";

test("playground renders timeline items", async ({ page }) => {
	await page.goto("/");

	await expect(page.getByTestId("timeline-playground-title")).toBeVisible();
	await expect(page.getByTestId("timeline-item-header-left")).toBeVisible();
	await expect(page.getByTestId("timeline-item-hero-title")).toBeVisible();
});
