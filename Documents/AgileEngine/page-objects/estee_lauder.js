const { expect, Page } = require('@playwright/test');
const { HeroEsteeLauder, SocialShareIcons } = require('../test-data/hero-data');

class EsteeLauderPage {

  constructor(page) {
    this.page = page;
  }

  async navigateToHomePage() {
    await this.page.goto('https://www.elcompanies.com');
  }

  async validateHeader() {
    const header = await this.page.locator('.dark_mode_logo')
    await expect(header).toHaveAttribute('src', HeroEsteeLauder.headingImage)
    await expect(header).toHaveAttribute('alt', HeroEsteeLauder.headingAtribute)
  }

  async validateMenuHero() {
    for (const [i, menuItem] of HeroEsteeLauder.menuOptions.entries()) {
      const menuUrl = await this.page.locator('//nav[@id="navigation_interaction"]/ul/li/a');
      const menuTitle = await this.page.locator('//nav[@id="navigation_interaction"]/ul/li/a/span');
      await expect(menuUrl.nth(i)).toHaveAttribute('href', menuItem.url);
      await expect(menuTitle.nth(i)).toContainText(menuItem.title);
    }
  }

  async validateMenuHero() {
    for (const [i, menuItem] of HeroEsteeLauder.menuOptions.entries()) {
      const menuUrl = await this.page.locator('//nav[@id="navigation_interaction"]/ul/li/a');
      const menuTitle = await this.page.locator('//nav[@id="navigation_interaction"]/ul/li/a/span');
      await expect(menuUrl.nth(i)).toHaveAttribute('href', menuItem.url);
      await expect(menuTitle.nth(i)).toContainText(menuItem.title);
    }
  }

  async waitForFooter(){
    await this.page.locator('#footerWrapper').waitFor();
  }

  async acceptCookies(){
    const acceptCookiesButton = await this.page.locator('#onetrust-banner-sdk #onetrust-accept-btn-container #onetrust-accept-btn-handler');
    await acceptCookiesButton.click()
  }

  async validateShareFunctionality(){
    this.acceptCookies();
    const shareFunctionality = await this.page.locator('//footer/div/div[@class="shareFunctionality"]');
    await shareFunctionality.click();
    const shareContent = await this.page.locator('.shareContent');
    await expect(shareContent).toHaveCSS('background-color','rgb(255, 255, 255)')
    await expect(shareContent.locator('.sharePageTitle')).toContainText('Share this article:')
    await expect(shareContent.locator('.sharePageTitle')).toHaveCSS('color','rgb(0, 0, 0)')
    await expect(shareContent.locator('.sharePageTitle .pageShareTitle')).toContainText(/The Estée Lauder Companies/)
    await expect(shareContent.locator('.sharePageTitle .pageShareTitle')).toHaveCSS('color','rgb(0, 0, 0)')
    for (const [i, socialShareOption] of SocialShareIcons.shareOptions.entries()) {
      const socialShareUrl = shareContent.locator('.sharePageIcon a');
      const socialShareTitle = shareContent.locator('.sharePageIcon a span');
      await expect(socialShareUrl.nth(i)).toHaveAttribute('href', socialShareOption.url);
      await expect(socialShareTitle.nth(i)).toContainText(socialShareOption.title);
    }
  }
}

module.exports = EsteeLauderPage;