import React from "react";
import { useState, useEffect } from 'react';
import './App.css';

//components
import Question from "./Question";

import axios from "axios";

import Loading from "./Loading";
import Output from "./Output";


//images

import paste from './images/paste.svg'
import select from './images/select.svg'
import write from './images/write.svg'






function Form() {



    const [prompt, setPrompt] = useState("");

    const [response, setResponse] = useState("");
    const [name, setName] = useState()
    const [relationship, setRelationship] = useState()
    const [company, setCompany] = useState()

    const [description, setDescription] = useState()
    const [accomplishments, setAccomplishments] = useState()
    const [skills, setSkills] = useState()
    const [style, setStyle] = useState()
    const [words, setWords] = useState(300)

    const [isLoading, setIsLoading] = useState(false)
    const [hasCalledAPI, setHasCalledAPI] = useState(false)



    const handleSubmit = (e) => {
        e.preventDefault();


        setPrompt(prevPrompt => {
            const updatedPrompt = `write me a letter of recommendation with a ${style} style in ${words} words for a candidate named ${name} with these accomplishments: ${accomplishments} and these skills: ${skills} who is applying for with this job description ${description} who I have the following relationship with: ${relationship}`;
            console.log(updatedPrompt); // this will log the updated prompt value
            return updatedPrompt;
        });

        setIsLoading(true)



    };


    useEffect(() => {
        if (prompt !== "") {
            axios
                .post("http://localhost:8080/chat", { prompt })
                .then((res) => {
                    // res.json()
                    console.log('CHECK ME!', prompt)
                    console.log(res)
                    // Update the response state with the server's response

                    setHasCalledAPI(true)
                    setIsLoading(false)
                    setResponse(prevRes => {
                        let newRes = res.data;
                        console.log("HERE", newRes)

                        return newRes;
                    });
                })
                // .then(data => console.log(response))
                .catch((err) => {
                    console.error(err);
                });
        }

    }, [prompt])





    return (
        <div>
            <div className="formTitle">
                <h1 className="headTitle">Letter of Recommendation</h1>
                <h2 className="headSub"> Let's Begin Writing!</h2>
                {/* <p className="headP">Please answer as many questions as possible</p> */}
            </div>

            <br />
            <br />

            <form className="inputForm" onSubmit={handleSubmit}>

                <div className="questionBox">
                    <img src={write} className="numberSize" />
                    <div className="questionBoxText">
                        <label className="label">Who are you writing this letter for?</label>
                        <input onChange={e => setName(e.target.value)} type="text" name="name" className="input" placeholder="e.g. Michelle Choi and Kyushik Nam"></input>
                    </div>
                </div>

                <br />
                <br />

                <div className="questionBox">
                    <img src={write} className="numberSize" />
                    <div className="questionBoxText">
                        <label className="label">What is your relationship with the applicant?</label>
                        <input onChange={e => setRelationship(e.target.value)} name="relationship" type="text" className="input" placeholder="e.g. I managed him for several years when we were both working at Apple."></input>
                    </div>
                </div>

                <br />
                <br />

                <div className="questionBox">

                    <img src={paste} className="numberSize" />
                    <div className="questionBoxText">
                        <label className="label">Feel free to paste the link to the job posting, or copy and paste the job description below!</label>
                        <div className="submitLink">
                            <input name="description" className="input" placeholder="e.g. www.linkedIn.com "></input>
                            <button className="button-29">Submit</button>
                        </div>

                    </div>

                </div>

                <br />


                <div className="questionBox">

                    <img src={paste} className="numberSize" />
                    <div className="questionBoxText">

                        <textarea onChange={e => setDescription(e.target.value)} name="description" className="textareaInput" rows="10" placeholder="e.g. Google is looking for two software engineers who can dominate the world... "></textarea>
                    </div>
                </div>


                <br />
                <br />

                <div className="questionBox">
                    <img src={write} className="numberSize" />
                    <div className="questionBoxText">
                        <label className="label">Please describe any accomplishments of the individual.</label>
                        <textarea onChange={e => setAccomplishments(e.target.value)} name="accomplishments" className="textareaInput" rows="10" placeholder="e.g. I created Google Maps and I graduated Summa Cum Laude at Harvard"></textarea>
                    </div>
                </div>

                <br />
                <br />

                <div className="questionBox">
                    <img src={write} className="numberSize" />
                    <div className="questionBoxText">
                        <div className="textWithOptional">
                            <label className="label">What are relevant skills or personal qualities the individual possesses?</label>
                            <label className="optional">Optional</label>
                        </div>
                        <textarea onChange={e => setSkills(e.target.value)} name="skills" className="textareaInput" rows="10" placeholder="e.g. I am fluent in React.js and in Python. I also have a very curious mind."></textarea>
                    </div>
                </div>

                <br />
                <br />

                {/* options */}

                <h1 style={{ textAlign: "center", color: "#59C2E9" }}>Options</h1>

                <div className="writingStylesDiv" >
                    <img src={select} className="numberSize" />
                    <label className="label">Writing Styles</label>


                    <br />

                    <div style={{ display: "flex" }}>
                        <div className="styleContainer" onChange={(e) => setStyle(e.target.id)}>
                            <input type="radio" id="formal" name="writingStyle" ></input>
                            <label htmlFor="formal">
                                <h2>Formal</h2>
                                <p>Professional tone.</p>
                                <p>Often used for academic or job-related recommendations.</p>
                            </label>
                        </div>

                        <br />

                        <div className="styleContainer" onChange={(e) => setStyle(e.target.id)}>
                            <input type="radio" id="narrative" className="radioButton" name="writingStyle"></input>
                            <label htmlFor="narrative" className="styleContainerText">
                                <h2>Narrative</h2>
                                <p>Storytelling format, highlighting the person’s achievements and qualities through anecdotes and examples.</p>
                                <p>Often used for personal recommendations.</p>
                            </label>
                        </div>
                    </div>

                    <br />

                    <div style={{ display: "flex" }}>
                        <div className="styleContainer" onChange={(e) => setStyle(e.target.id)}>
                            <input type="radio" id="bulletPoint" className="radioButton" name="writingStyle"></input>
                            <label htmlFor="bulletPoint" className="styleContainerText">
                                <h2>Bullet Point</h2>
                                <p>Structured with short, concise statements that highlight the person’s skills and achievements.</p>
                                <p>Often used when the recipient requires a quick summary of the person’s qualifications.</p>
                            </label>
                        </div>

                        <br />

                        <div className="styleContainer" onChange={(e) => setStyle(e.target.id)}>
                            <input type="radio" id="comparative" className="radioButton" name="writingStyle"></input>
                            <label htmlFor="comparative" className="styleContainerText">
                                <h2>Comparative</h2>
                                <p>Compares the person to others in their field, highlighting their strengths and qualifications. </p>
                                <p>Often used in academic or job-related recommendations.</p>
                            </label>
                        </div>

                    </div>

                    <br />

                    <div className="styleContainer" onChange={(e) => setStyle(e.target.id)}>
                        <input type="radio" id="persuasive" className="radioButton" name="writingStyle"></input>
                        <label htmlFor="persuasive" className="styleContainerText">
                            <h2>Persuasive</h2>
                            <p>Includes strong statements of support and a clear endorsement of the person’s qualifications. </p>
                            <p>Often used person being recommended is seeking a promotion or career change.</p>
                        </label>
                    </div>

                    <br />



                </div>


                <br />
                <br />

                <div className="submitWrapper">

                    <input type="submit" className="button-28"></input>
                </div>


            </form >

            <br />
            <br />

            {isLoading ? <Loading /> : null}


            {hasCalledAPI ? <Output response={response} name={name} /> : null}


        </div >
    )
}

export default Form