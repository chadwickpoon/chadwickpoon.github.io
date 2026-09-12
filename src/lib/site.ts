export const site = {
  name: "Chadwick Poon",
  url: "https://chadwickpoon.com",
  description: "Product, people, and a little play. Explore Chadwick Poon’s work in AI and health, independent projects, games, and life outdoors.",
  linkedin: "https://www.linkedin.com/in/chadwick-poon/",
  email: "chadwickpoon@gmail.com",
} as const;

export const indexingEnabled = process.env.SITE_INDEXING_ENABLED === "true";
