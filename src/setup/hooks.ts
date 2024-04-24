import { Before, After, ITestCaseHookParameter} from "@cucumber/cucumber"
import { ScenarioWorld } from "./world"
import { env } from '../env/parseEnv'

Before(async function (this: ScenarioWorld, scenario) {
    console.log(`Running cucumber scenario ${scenario.pickle.name}`)

    const contextOptions = {
        recordVideo: {
            dir: `${env('VIDEO_PATH')}${scenario.pickle.name}`
        }
    }

    const ready = await this.init(contextOptions)
    return ready
})

After(async function(this: ScenarioWorld, scenario) {
    // page and browser become local variables holding the values of this.screen.page and this.screen.browser
    const {
        screen: {page, browser}
    } = this

    const scenarioSatus = scenario.result?.status

    if (scenarioSatus === 'FAILED'){
        const screenshot = await page.screenshot({
            path: `${env('SCREENSHOT_PATH')}${scenario.pickle.name}.png`
        })
        await this.attach(screenshot, `image/png`)
    }
    await browser.close()
    return browser
})