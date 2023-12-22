import puppeteer from 'puppeteer';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const browser = await puppeteer.launch({
        headless: 'new',
      });

      const page = await browser.newPage();

      await page.goto(
        'https://www.propertyshare.in/commercial-properties?type=resale'
      );

      const propertyInfo = await page.evaluate(() => {
        const propertyList = document.querySelectorAll('.info');
        //const imgList = document.querySelectorAll('.property_image_wrapper');

        return Array.from(propertyList).map((property) => {
          const text = property.querySelector('.title').innerText;
          const location = property.querySelector('.subtitle').innerText;

          return { text, location };
        });
      });

      const propImg = await page.evaluate(() => {
        const imgList = document.querySelectorAll('.property_image_wrapper');

        return Array.from(imgList).map((img) => {
          const imageSrc = img
            .querySelector('.prop-card-img')
            .getAttribute('src');
          return { imageSrc };
        });
      });

      let desc = [];

      for (let i = 0; i < propertyInfo.length; i++) {
        let obj1 = propertyInfo[i];
        let obj2 = propImg[i];

        let merge = { ...obj1, ...obj2 };
        desc.push(merge);
      }

      res.send(desc);

      await browser.close();

      return res.status(200);
    } catch (err) {
      console.log(err, 'Scrape JS');
      return res.status(400);
    }
  }
}
