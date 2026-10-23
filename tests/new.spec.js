
import { test, expect } from '@playwright/test';

test('user can search for weather by city', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // Step 1: Find the city input
  const cityInput = page.getByRole('textbox', {
    name: 'City Name',
  });

  // Step 2: Enter a city
  await cityInput.fill('London');

  // Step 3: Click Search
  await page.getByRole('button', { name: 'Search' }).click();

  // Step 4: Verify the city appears on the page
  await expect(page.getByText('London', { exact: true }))
    .toBeVisible();
});



