import { expect, test } from '@playwright/test'

test('shows the project name', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'Horizon Atlas' })).toBeVisible()
})
