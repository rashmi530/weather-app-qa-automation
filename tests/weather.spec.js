
import { test, expect } from '@playwright/test';

test('weather dashboard displays the updated heading', async ({ page }) => {
  await page.goto('http://127.0.0.1:5173');

  await expect(
    page.getByRole('heading', {
      name: 'Weather Dashboard by Rashmi',
      level: 2,
    })
  ).toBeVisible();
});
