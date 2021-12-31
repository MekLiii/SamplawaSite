const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://profootballteam.futbolowo.pl/club/33710');
  await page.screenshot({ path: 'example.png' });

  const dimensions = await page.evaluate(() => {
    const table = '#team_8914'
    return table.innerText
    
  });
  console.log(dimensions)

  await browser.close();
})();