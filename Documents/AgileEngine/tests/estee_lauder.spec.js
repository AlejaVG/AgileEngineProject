const { test, expect } = require('@playwright/test');
const EsteeLauderPage = require('../page-objects/estee_lauder');
const AxeBuilder = require('@axe-core/playwright').default;

test.describe('Validating Estee Lauder Hero Components', ()=> {
  let esteeLauderPage;

  test.beforeEach(async ({ page }) => {
    esteeLauderPage = new EsteeLauderPage(page);
    await esteeLauderPage.navigateToHomePage();
  });

  test('Validate Heading @functional', async () => {
    await esteeLauderPage.validateHeader();
  });

  test('Validate Menu options @functional', async () => {
    await esteeLauderPage.validateMenuHero();
  });

  test('Validate Share Functionality @functional', async () => {
    await esteeLauderPage.validateShareFunctionality();
  });

  test('Validate Accessibility Guidelines Validation for the Footer @accessibility', async ({ page }) => {
    await esteeLauderPage.waitForFooter();
    const accessibilityScanResults = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag21aa']).include('#footerWrapper').analyze();
    expect.soft(accessibilityScanResults.violations).toEqual([]);
  });

  test('Validate Accessibility Guidelines Validation in the entire page @accessibility', async ({ page }) => {
    await esteeLauderPage.acceptCookies();
    const accessibilityScanResults = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag21aa']).analyze(); 
    expect.soft(accessibilityScanResults.violations).toEqual([]); 
  });
});
