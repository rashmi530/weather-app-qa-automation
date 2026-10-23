
import { test, expect } from '@playwright/test';

test('weather app opens successfully', async ({ page }) => {
  await page.goto('http://localhost:5173');

  await expect(
    page.getByRole('textbox', { name: 'City Name' })
  ).toBeVisible();

  await expect(
    page.getByRole('button', { name: 'Search' })
  ).toBeVisible();
});
