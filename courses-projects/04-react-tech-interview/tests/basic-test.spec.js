// @ts-check
import { test, expect } from '@playwright/test';

const LOCALHOST_URL = 'http://localhost:5173/';
const CAT_IMAGE_BASE_URL = 'https://cataas.com/cat/';

test('show a random fact and an image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  // retrieve the text fact and image
  const text = await page.getByRole('paragraph');
  const image = await page.getByRole('img');

  const textContent = await text.textContent();
  const imageSrc = await image.getAttribute('src');

  // expected results
  await expect(textContent?.length).toBeGreaterThan(3);
  await expect(imageSrc?.startsWith(CAT_IMAGE_BASE_URL)).toBeTruthy();
});
