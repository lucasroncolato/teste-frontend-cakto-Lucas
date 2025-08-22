import { test, expect } from '@playwright/test';

test('pix checkout flow', async ({ page }) => {
  await page.goto('/');
  await page.fill('#fullName', 'John Doe');
  await page.fill('#email', 'john@example.com');
  await page.fill('#document', '12345678901');
  await page.check('#terms');
  await page.getByRole('button', { name: /finalizar compra/i }).click();
  await page.waitForURL('**/checkout/success', { timeout: 10000 });
  await expect(page.url()).toContain('/checkout/success');
});
