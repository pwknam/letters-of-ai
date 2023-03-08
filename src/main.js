const puppeteer = require('puppeteer');

async function getJobDescription(url){
    const browser = await puppeteer.launch({ headless: false }); // for test disable the headlels mode,
    const page = await browser.newPage();
    await page.setViewport({ width: 1000, height: 926 });
    await page.goto(url,{waitUntil: 'networkidle2'});

    console.log("start evaluate javascript")
    /** @type {string[]} */
    var parseJob = await page.evaluate(()=>{
        var jobDescription = document.getElementsByClassName('description')[0].innerText
        return [jobDescription]
})

console.log(parseJob)
browser.close()
} 
url = "https://www.linkedin.com/jobs/view/project-coordinator-at-redstart-creative-3516498995?refId=%2BP2BB51jl75zfvx9mzml%2BA%3D%3D&trackingId=ZeHvxZvIXNcWt23UWty8KQ%3D%3D&trk=public_jobs_topcard-title"
getJobDescription(url)