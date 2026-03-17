import { expect, test } from "@playwright/test";

test("playground renders timeline demo sections", async ({ page }) => {
	await page.goto("/");

	await expect(page.getByText("基础示例")).toBeVisible();
	await expect(page.getByText("组合示例")).toBeVisible();
	await expect(page.getByText("up 方向淡入")).toBeVisible();
	await expect(page.getByText("down 方向淡入")).toBeVisible();
	await expect(page.getByText("left 方向淡入")).toBeVisible();
	await expect(page.getByText("right 方向淡入")).toBeVisible();
});

test("hover timeline-up trigger should start up animation", async ({
	page,
}) => {
	await page.goto("/");

	const trigger = page.getByTestId("timeline-up-trigger");
	const firstItem = page.getByTestId("timeline-up-item-1");
	await expect(trigger).toBeVisible();
	await expect(firstItem).toBeVisible();

	await trigger.hover();

	await expect
		.poll(
			async () =>
				firstItem.evaluate(
					(element) => window.getComputedStyle(element).opacity
				),
			{ timeout: 3000 }
		)
		.toBe("1");
});
