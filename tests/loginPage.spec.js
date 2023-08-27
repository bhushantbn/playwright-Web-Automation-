// @ts-check
const { test, expect } = require("@playwright/test");

test.skip("has title", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/OrangeHRM/);
});

test.skip("has Login URL", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  // Expect a Login URL
  await expect(page).toHaveURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
});

test.skip("has Visible Logo", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  // Expect Logo visiblity.
  const isLogoVisible = await page.waitForSelector("img", { state: "visible" });

  expect(isLogoVisible).toBeTruthy();
});

test.skip("Should Not Visible Logo", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

  // Expect Logo visiblity.
  const isLogoVisible = await page.locator("img")

  expect(isLogoVisible).toHaveAttribute("src", "/web/images/ohrm_logo1.png")
})
test("Verify Login Page Dashboard", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  
  const usernameInput = page.locator("//input[@placeholder='Username']");
  const passwordInput = page.locator("//input[@placeholder='Password']");
  const Button = page.locator("//button[@type='submit']");
  
  await usernameInput.fill("Admin");
  await passwordInput.fill("admin123");
  await Button.click();
  
  const nameElement = await page.locator('span.oxd-topbar-header-breadcrumb')
  
  // Wait for the name element to be visible
  await nameElement.waitFor({ state: "visible" });
  
  // Assert that the name element is visible
  await expect(nameElement).toBeVisible();
});

test("Verify User Profile Image Alt Text", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  
  const usernameInput = page.locator("//input[@placeholder='Username']");
  const passwordInput = page.locator("//input[@placeholder='Password']");
  const Button = page.locator("//button[@type='submit']");
  
  await usernameInput.fill("Admin");
  await passwordInput.fill("admin123");
  await Button.click();

  await expect(page.getByAltText('profile picture')).toBeVisible();
 
 
});

test("Verify User Profile Name", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  
  const usernameInput = page.locator("//input[@placeholder='Username']");
  const passwordInput = page.locator("//input[@placeholder='Password']");
  const Button = page.locator("//button[@type='submit']");
  
  await usernameInput.fill("Admin");
  await passwordInput.fill("admin123");
  await Button.click();

  await page.getByAltText('profile picture').click();
 
  const profileName=await page.locator('p.oxd-userdropdown-name').textContent();
  //await profileName.waitFor({state:'visible'});
  await expect(profileName).toContain('Paul Collings');

});
