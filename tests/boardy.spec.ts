import { test, expect } from "@playwright/test";

test("introduction explorer follows each goal and clears outdated context", async ({ page }) => {
  test.setTimeout(60_000);
  const errors: string[] = [];
  const outsideRequests: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/explore/boardy");
  const siteOrigin = new URL(page.url()).origin;
  page.on("request", (request) => { if (new URL(request.url()).origin !== siteOrigin) outsideRequests.push(request.url()); });
  await expect(page.getByRole("button", { name: "Add a little context" })).toBeDisabled();
  const examples = [
    { goal: "Understand a customer", first: "Learn how they work today", second: "Get feedback on an early idea", person: "Riley", topic: "Feedback on an early research tool" },
    { goal: "Meet another builder", first: "Compare notes on prototypes", second: "Trade honest product feedback", person: "Sam", topic: "A fresh pair of eyes on each product" },
    { goal: "Find a fresh perspective", first: "Work out what to focus on", second: "Challenge my assumptions", person: "Jordan", topic: "Making a product decision more explicit" },
  ];
  for (const item of examples) {
    await page.getByText(item.goal, { exact: true }).click();
    await page.getByRole("button", { name: "Add a little context" }).click();
    await expect(page.getByRole("heading", { name: "Make the conversation useful." })).toBeFocused();
    await expect(page.getByRole("button", { name: "Explore a connection" })).toBeDisabled();
    await page.getByText(item.first, { exact: true }).click();
    await page.getByRole("button", { name: "Explore a connection" }).click();
    await expect(page.getByRole("heading", { name: "A reason to say hello." })).toBeInViewport();
    await expect(page.getByRole("heading", { name: item.person, exact: true })).toBeVisible();
    const disclosure = page.getByRole("button", { name: "Read a sample introduction" });
    await expect(disclosure).toHaveAttribute("aria-expanded", "false");
    await disclosure.click();
    await expect(page.locator(".intro-letter")).toContainText(`Alex, meet ${item.person}`);
    await page.getByRole("button", { name: "Close the sample introduction" }).click();
    await expect(page.locator(".intro-letter")).toBeHidden();
    await page.getByRole("button", { name: "Change the focus" }).click();
    await page.getByText(item.second, { exact: true }).click();
    await page.getByRole("button", { name: "Explore a connection" }).click();
    await expect(page.getByRole("heading", { name: item.topic, exact: true })).toBeVisible();
    await expect(page.locator(".intro-letter")).toBeHidden();
    await page.getByRole("button", { name: "Read a sample introduction" }).click();
    await expect(page.locator(".intro-letter")).toBeVisible();
    await page.getByRole("button", { name: "Change the focus" }).click();
    await page.getByRole("button", { name: "Change the situation" }).click();
  }
  await page.getByText("Understand a customer", { exact: true }).click();
  await page.getByRole("button", { name: "Add a little context" }).click();
  await expect(page.getByRole("button", { name: "Explore a connection" })).toBeDisabled();
  await page.getByText("Learn how they work today", { exact: true }).click();
  await page.getByRole("button", { name: "Explore a connection" }).click();
  await page.getByRole("button", { name: "Try another introduction" }).click();
  await expect(page.getByRole("heading", { name: "Who would you like to meet?" })).toBeFocused();
  await expect(page.getByRole("button", { name: "Add a little context" })).toBeDisabled();
  expect(errors).toEqual([]);
  expect(outsideRequests).toEqual([]);
});

test("Boardy works by keyboard, with reduced motion, and from the gallery", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.locator(".experience-card").filter({ hasText: "Boardy" }).click();
  await expect(page).toHaveURL(/\/explore\/boardy$/);
  await expect(page.getByText("Head of Product · 2025", { exact: true })).toBeVisible();
  await page.getByRole("radio", { name: /Understand a customer/ }).focus();
  await page.keyboard.press("Space");
  await page.keyboard.press("ArrowDown");
  await expect(page.getByRole("radio", { name: /Meet another builder/ })).toBeChecked();
  await page.getByRole("button", { name: "Add a little context" }).focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("heading", { name: "Make the conversation useful." })).toBeFocused();
  await expect(page.getByRole("heading", { name: "Make the conversation useful." })).toBeInViewport();
  await page.getByRole("radio", { name: "Compare notes on prototypes" }).focus();
  await page.keyboard.press("Space");
  await page.keyboard.press("ArrowDown");
  await expect(page.getByRole("radio", { name: "Trade honest product feedback" })).toBeChecked();
  await page.getByRole("button", { name: "Explore a connection" }).click();
  await page.getByRole("button", { name: "Read a sample introduction" }).focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("button", { name: "Close the sample introduction" })).toHaveAttribute("aria-expanded", "true");
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await expect(page.getByText(/The people and conversations are fictional/)).toBeVisible();
  await page.getByRole("link", { name: "Explore Videoath", exact: false }).click();
  await expect(page).toHaveURL(/\/explore\/videoath$/);
  await page.goBack();
  await expect(page).toHaveURL(/\/explore\/boardy$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Boardy");
  await page.reload();
  await expect(page.getByRole("button", { name: "Add a little context" })).toBeDisabled();
});

test("Boardy background and product links remain readable without JavaScript", async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(`${baseURL}/explore/boardy`);
  await expect(page.getByText("Head of Product · 2025", { exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: "Visit Boardy", exact: false }).first()).toBeVisible();
  await expect(page.locator("noscript .connection-footnote")).toBeVisible();
  await context.close();
});
