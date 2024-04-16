import { Then, Given} from '@cucumber/cucumber'
import { expect } from '@playwright/test'


Then(
    /^the "([^"]*)" should contain the text "(.*)"$/,
    async function (elementKey, expectedText) {

        const {
            screen: { page },
        } = this

        console.log(`the ${elementKey} should contain text ${expectedText}`)

        const content = await page.textContent("[data-id='contacts']")

        expect(content).toBe(expectedText)
    }
)


  Given(
    /^the "([^"]*)" should be displayed$/, 
    async function (elementKey) {

        const {
            screen: { page },
        } = this

        console.log(`the ${elementKey} should be displayed`)
        const logo = await page.locator('.testing-talks-logo')
        expect(logo).toBeVisible()
  });   
