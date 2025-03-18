import asyncio
from playwright.async_api import async_playwright

async def url_to_pdf(url, output_path):
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        await page.goto(url)
        await page.pdf(path=output_path)
        await browser.close()

# Example usage
url = 'http://127.0.0.1:3000/index.html'
output_path = 'DVMLaunchPlan.pdf'
asyncio.run(url_to_pdf(url, output_path))