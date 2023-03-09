const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const puppeteer = require('puppeteer')

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({

  apiKey: "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",

});
const openai = new OpenAIApi(configuration);

// Set up the server
const app = express();
app.use(bodyParser.json());
app.use(cors())

// Set up the ChatGPT endpoint
app.post("/chat", async (req, res) => {
  // Get the prompt from the request
  const { prompt } = req.body;

  // Generate a response with ChatGPT
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 2048,
    temperature: 0.6,

    stop: null,
  });
  //   console.log(completion.data)
  res.send(completion.data.choices[0].text);
});

app.post('/scrape', async (req, res) => {
  const url = req.body.url;
  if (url !== ""){
    let browser = await puppeteer.launch();
    let page = await browser.newPage();
    await page.goto(url);
    var jobDescription;
    var parseJob = await page.evaluate(()=>{
      if (document.getElementsByClassName('description').length>0){
        jobDescription = document.getElementsByClassName('description')[0].innerText


      }
      else if (document.getElementsByClassName('job-description').length>0){
        jobDescription = document.getElementsByClassName('job-description')[0].innerText

      }

      return [jobDescription]
  })

    // console.log(parseJob)
    // const html = await page.content();
    await browser.close();
    res.send(parseJob);
  }
  else res.send("")
});


// Start the server
const port = 8080;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});