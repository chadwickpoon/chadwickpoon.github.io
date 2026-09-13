import { test, expect } from "@playwright/test";

test("guide prioritizes the gallery without hiding worlds and opens a real story", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page.getByRole("button", { name: "Let’s explore" })).toBeDisabled();
  await expect(page.locator(".experience-card")).toHaveCount(6);
  await page.getByText("The things you build", { exact: true }).click();
  await page.getByRole("button", { name: "Let’s explore" }).click();
  await expect(page.locator(".experience-card")).toHaveCount(6);
  await expect(page.getByRole("heading", { name: "A few worlds to explore." })).toBeFocused();
  await page.locator(".experience-card").filter({ hasText: "Videoath" }).click();
  await expect(page).toHaveURL(/\/explore\/videoath$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Videoath");
  await page.reload();
  await expect(page.getByRole("link", { name: "Visit Videoath" })).toBeVisible();
  await page.goBack();
  await expect(page.getByRole("heading", { name: "A few worlds to explore." })).toBeVisible();
  expect(errors).toEqual([]);
});

test("browse, personal starting point, and honest empty trails", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Browse everything" }).click();
  await expect(page.locator(".experience-card")).toHaveCount(6);
  await page.getByText("The person behind them", { exact: true }).click();
  await page.getByRole("button", { name: "Let’s explore" }).click();
  await expect(page.locator(".experience-card").first()).toHaveAttribute("href", "/explore/dota");
  await expect(page.getByRole("group", { name: "Filter experiences" })).toHaveCount(0);
  await expect(page.locator(".experience-card")).toHaveCount(6);
  await page.locator(".experience-card").filter({ hasText: "Take the long way." }).click();
  await expect(page).toHaveURL(/\/trails$/);
  await expect(page.getByText("First trail notes on the way.")).toBeVisible();
  await expect(page.locator("canvas")).toHaveCount(0);
});

test("keyboard choices and reduced motion work without overflow", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const choice = page.getByRole("radio", { name: "The things you build" });
  await choice.focus();
  await page.keyboard.press("Space");
  await page.keyboard.press("ArrowDown");
  await expect(page.getByRole("radio", { name: "The person behind them" })).toBeChecked();
  await page.getByRole("button", { name: "Let’s explore" }).click();
  await expect(page.locator(".experience-card")).toHaveCount(6);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await expect(page.getByAltText("Chadwick’s Dog Walker avatar")).toBeVisible();
  await expect(page.locator(".guide-animation img")).toHaveAttribute("src", "/characters/dog-walker-pfp.png");
  await expect(page.getByRole("button", { name: "Play Dog Walker animation" })).toBeVisible();
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await expect(page.locator(".guide-animation img")).toHaveAttribute("src", "/characters/dog-walker.gif");
});

test("public routes, metadata, and missing routes have correct responses", async ({ request }) => {
  const indexingEnabled = process.env.SITE_INDEXING_ENABLED === "true";
  for (const path of ["/", "/about", "/trails", "/explore/videoath", "/explore/boardy", "/explore/alan", "/explore/fabulous", "/explore/dota"]) {
    const response = await request.get(path);
    expect(response.status(), path).toBe(200);
    const html = await response.text();
    expect(html).toContain(`name="robots" content="${indexingEnabled ? "index, follow" : "noindex, nofollow"}"`);
    expect(html).toContain(`rel="canonical" href="https://chadwickpoon.com${path === "/" ? "" : path}`);
  }
  expect((await request.get("/explore/missing-story")).status()).toBe(404);
  expect((await request.get("/missing-route")).status()).toBe(404);
  expect((await request.get("/characters/dog-walker-pfp.png")).status()).toBe(200);
  const robots = await (await request.get("/robots.txt")).text();
  expect(robots).toContain(indexingEnabled ? "Allow: /" : "Disallow: /");
  const sitemap = await (await request.get("/sitemap.xml")).text();
  if (indexingEnabled) {
    expect(robots).toContain("Sitemap: https://chadwickpoon.com/sitemap.xml");
    expect(sitemap.match(/<loc>/g)).toHaveLength(8);
    expect(sitemap).toContain("https://chadwickpoon.com/explore/boardy");
  } else {
    expect(sitemap).not.toContain("<loc>");
  }
});

test("www redirect preserves a deep link and query", async ({ request }) => {
  test.skip(!!process.env.TEST_BASE_URL, "Host override is a local routing-contract check.");
  const response = await request.get("/explore/boardy?source=test", { headers: { host: "www.chadwickpoon.com" }, maxRedirects: 0 });
  expect(response.status()).toBe(308);
  expect(response.headers().location).toBe("https://chadwickpoon.com/explore/boardy?source=test");
});

test("Dog Walker artwork loads, can pause, and remains the About avatar", async ({ page }) => {
  await page.goto("/");
  const animation = page.locator(".guide-animation img");
  await expect(animation).toHaveAttribute("src", "/characters/dog-walker.gif");
  await expect.poll(() => animation.evaluate((image: HTMLImageElement) => image.complete && image.naturalWidth > 0)).toBe(true);
  await page.getByRole("button", { name: "Pause Dog Walker animation" }).click();
  await expect(animation).toHaveAttribute("src", "/characters/dog-walker-pfp.png");
  await page.getByRole("button", { name: "Play Dog Walker animation" }).click();
  await expect(animation).toHaveAttribute("src", "/characters/dog-walker.gif");
  await page.getByText("The person behind them", { exact: true }).click();
  await page.getByRole("button", { name: "Let’s explore" }).click();
  await expect(page.locator(".experience-card")).toHaveCount(6);
  await page.getByRole("button", { name: "Browse everything" }).click();
  await expect(page.locator(".experience-card").first()).toHaveAttribute("href", "/explore/videoath");
  await expect(page.getByRole("group", { name: "Filter experiences" })).toHaveCount(0);
  await page.getByRole("link", { name: "About me", exact: true }).click();
  await expect(page.getByAltText("Chadwick’s Dog Walker avatar")).toBeVisible();
  await expect(page.getByText(/I have a corgi/)).toBeVisible();
});
