import { test, expect } from "@playwright/test";

test("practice walkthrough gives different feedback and can be restarted", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/explore/videoath");
  await expect(page.getByRole("button", { name: "Explore the feedback" })).toBeDisabled();
  await expect(page.getByRole("button", { name: "Reflect", exact: true })).toBeDisabled();
  await page.getByText("Take on their part myself.", { exact: true }).click();
  await page.getByRole("button", { name: "Explore the feedback" }).click();
  await expect(page.getByRole("heading", { name: "Find one thing to improve." })).toBeFocused();
  await expect(page.getByRole("heading", { name: "Find one thing to improve." })).toBeInViewport();
  await expect(page.getByText(/Taking over may solve today’s deadline/)).toBeVisible();
  await page.getByRole("button", { name: "Try a next step" }).click();
  await expect(page.getByRole("heading", { name: "Give your answer a next step." })).toBeInViewport();
  await page.getByText("Make a plan together", { exact: true }).click();
  await expect(page.getByText(/You’ve connected empathy to action/)).toBeVisible();
  await page.getByText("Understand what’s happening", { exact: true }).click();
  await expect(page.getByText(/You’ve added context before jumping to a solution/)).toBeVisible();
  await expect(page.getByText(/You’ve connected empathy to action/)).toHaveCount(0);
  await page.getByRole("button", { name: "Back to feedback" }).click();
  await expect(page.getByText(/Taking over may solve today’s deadline/)).toBeVisible();
  await page.getByRole("button", { name: "Change my opening" }).click();
  await page.getByText("Check in with them privately.", { exact: true }).click();
  await expect(page.getByRole("button", { name: "Try again", exact: true })).toBeDisabled();
  await page.getByRole("button", { name: "Explore the feedback" }).click();
  await expect(page.getByText(/A thoughtful opening needs a practical follow-through/)).toBeVisible();
  await page.getByRole("button", { name: "Try a next step" }).click();
  await expect(page.getByRole("heading", { name: "Give your answer a next step." })).toBeInViewport();
  await expect(page.getByRole("radio", { name: "Understand what’s happening" })).not.toBeChecked();
  await page.getByRole("button", { name: "Start again" }).click();
  await expect(page.getByRole("heading", { name: "Where would you start?" })).toBeFocused();
  await expect(page.getByRole("button", { name: "Explore the feedback" })).toBeDisabled();
  await page.getByText("Remind them what’s at stake.", { exact: true }).click();
  await page.getByRole("button", { name: "Explore the feedback" }).click();
  await expect(page.getByText(/You haven’t yet found out why/)).toBeVisible();
  expect(errors).toEqual([]);
});

test("walkthrough supports keyboard, reduced motion, and direct navigation", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/explore/videoath#practice");
  const first = page.getByRole("radio", { name: "Remind them what’s at stake." });
  await first.focus();
  await page.keyboard.press("Space");
  await page.keyboard.press("ArrowDown");
  await expect(page.getByRole("radio", { name: "Take on their part myself." })).toBeChecked();
  await page.getByRole("button", { name: "Explore the feedback" }).focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("heading", { name: "Find one thing to improve." })).toBeFocused();
  await expect(page.getByRole("heading", { name: "Find one thing to improve." })).toBeInViewport();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await expect(page.getByText(/An illustrative scenario with written examples/)).toBeVisible();
  await page.getByRole("link", { name: "Meet Boardy" }).click();
  await expect(page).toHaveURL(/\/explore\/boardy$/);
  await page.goBack();
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Videoath");
});

test("professional content and the gallery remain available without JavaScript", async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(baseURL!);
  await expect(page.locator(".experience-card")).toHaveCount(6);
  await page.locator(".experience-card").filter({ hasText: "Videoath" }).click();
  await expect(page.getByRole("link", { name: "Visit Videoath", exact: false }).first()).toBeVisible();
  await expect(page.locator("noscript .demo-footnote")).toBeVisible();
  await context.close();
});
