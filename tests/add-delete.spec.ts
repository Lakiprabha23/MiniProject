import { test, expect } from '@playwright/test';

test.describe('Add / Delete Elements - Real UI', () => {

  test('CREATE element - updated', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');

    await page.getByRole('button', { name: 'Add Element' }).click();

    const deleteButton = page.getByRole('button', { name: 'Delete' });
    await expect(deleteButton).toBeVisible();
  });

  test('DELETE element - updated', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');

    // Create first
    await page.getByRole('button', { name: 'Add Element' }).click();

    const deleteButton = page.getByRole('button', { name: 'Delete' });
    await expect(deleteButton).toBeVisible();

    // Delete
    await deleteButton.click();

    // Verify removed
    await expect(deleteButton).toHaveCount(0);
  });

});
