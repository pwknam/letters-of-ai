import React from "react";
import { useState } from 'react';
import './App.css';
import Question from "./Question";
import axios from "axios";
//images
import number from './images/number.svg'
import number2 from './images/number_2.svg'
import number3 from './images/number_3.svg'
import number4 from './images/number_4.svg'
import number5 from './images/number_5.svg'
import number6 from './images/number_6.svg'
import number7 from './images/number_7.svg'
import number8 from './images/number_8.svg'
import number9 from './images/number_9.svg'
import number10 from './images/number_10.svg'
import number11 from './images/number_11.svg'





function Form() {

    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [name, setName] = useState()
    const [relationship, setRelationship] = useState()
    const [company, setCompany] = useState()
  
    const handleSubmit = (e) => {
      e.preventDefault();

    setPrompt(prevPrompt => {
        const updatedPrompt = `write me a letter of recommendation with 300 words for a candidate named ${name} who is applying for a job at ${company} who I have the following relationship with: ${relationship}`;
        console.log(updatedPrompt); // this will log the updated prompt value
        return updatedPrompt;
      });

      console.log(prompt)
      axios
        .post("http://localhost:8080/chat", { prompt })
        .then((res) => {
            // res.json()
            console.log(res)
          // Update the response state with the server's response
          setResponse(res.data);
          console.log(response)
        })
        // .then(data => console.log(response))
        .catch((err) => {
          console.error(err);
        });
    };

    return (
        <div>
            <div className="formTitle">
                <h1>Letter of Recommendation</h1>
                <h2> Let's Begin Writing!</h2>
                <p>Please answer as many questions as possible</p>
            </div>

            <br />

            <form className="inputForm" onSubmit={handleSubmit}>

                <div className="questionBox">
                    <img src={number} className="numberSize" />
                    <div className="questionBoxText">
                        <label className="label">Who are you writing this letter for?</label>
                        <input onChange={e => setName(e.target.value)} type="text" name="name" className="input" placeholder="e.g. Michelle Choi and Kyushik Nam"></input>
                    </div>
                </div>

                <br />
                <br />

                <div className="questionBox">
                    <img src={number2} className="numberSize" />
                    <div className="questionBoxText">
                        <label className="label">What is your relationship with the applicant?</label>
                        <input onChange={e => setRelationship(e.target.value)}name = "relationship" type="text" className="input" placeholder="e.g. I boss Kyushik around and tell him what to do."></input>
                    </div>
                </div>

                <br />
                <br />

                <div className="questionBox">
                    <img src={number3} className="numberSize" />
                    <div className="questionBoxText">
                        <label className="label">What is the name of the company?</label>
                        <input onChange={e => setCompany(e.target.value)}name = "company" type="text" className="input" placeholder="e.g. Apple, Inc."></input>
                    </div>
                </div>

              
                <div className="submitWrapper">

                    <input type="submit" className="submitButton"></input>
                </div>

            <p>{response}</p>
            </form >

            <br />
            <br />

        </div >
    )
}

export default Form