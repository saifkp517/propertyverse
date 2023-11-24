import puppeteer from "puppeteer";

export default async function handler(req, res) {
    if(req.method === "GET")
    {
        try {
            const browser = await puppeteer.launch({
                headless: true
            })
    
            const page = await browser.newPage();
    
            await page.goto('https://www.propertyshare.in/commercial-properties?type=resale', {waitUntil: 'domcontentloaded'});
    
    
            const quotes = await page.evaluate(() => {
                const quoteList = document.querySelectorAll('.info');
    
                return Array.from(quoteList).map((quote) => {
    
                    const text = quote.querySelector('.title').innerText;
                    const subtitleloc = quote.querySelector('.subtitle').innerText;
    
                    return { text, subtitleloc }
                })

    
            })
    
            res.send(quotes);
    
            await browser.close();

            return res.status(200);
        }
        catch (err) {
            console.log(err);
            return res.status(400);
        }
    }
}