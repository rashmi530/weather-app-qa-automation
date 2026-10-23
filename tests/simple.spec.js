import{test,expect} from '@playwright/test';
test('weather app opns successfully',async ({page})=>{
    await page.goto('http://localhost:5173');
    await expect(
        page.getByRole('textbox',{name:'City Name'})
    ).toBeVisible();
    await expect(
        page.getByRole('button',{name:'Search'})
    ).toBeVisible(); });
    test('user can enter a city name',async({page})=>{
        await page.goto('http://localhost:5173');
        const cityInput =page.getByRole('textbox',{name:'City Name'});
        await cityInput.fill('London');
        await expect(cityInput).toHaveValue('London')

    });
