// @ts-check
const { test, expect } = require("@playwright/test");

test("has title", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/OrangeHRM/);
});

test("has Login URL", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  // Expect a Login URL
  await expect(page).toHaveURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
});

test("has Visible Logo", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  // Expect Logo visiblity.
  const isLogoVisible= await page.waitForSelector('img',{state:'visible'},);

  expect(isLogoVisible).toBeTruthy();
});

test.skip("Should Not Visible Logo", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  // Expect Logo visiblity.
  const isLogoVisible=await page.locator('img');

  expect(isLogoVisible).toHaveAttribute('src','/web/images/ohrm_logo1.png');
});


