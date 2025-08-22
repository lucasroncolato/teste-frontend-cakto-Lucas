import { test, expect } from '@playwright/test';

test('toggle theme', async ({ page }) => {
  await page.goto('/');
  const btn = page.getByRole('button');
  await btn.click();
  await expect(btn).toHaveAttribute('aria-pressed', 'true');
});
