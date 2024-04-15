import { Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'


Then(
    /^the "([^"]*)" should contain the text "(.*)"$/,
    async function (elementKey, expectedText) {
        console.log(`the ${elementKey} should contain text ${expectedText}`)

        const content = await global.page.textContent("[data-id='contacts']")

        expect(content).toBe(expectedText)
    }
)