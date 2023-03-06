import React from "react";
import { useState } from 'react';
import './App.css';

//components
import Question from "./Question";
import Loading from "./Loading";
import Output from "./Output";

//images
import number from './images/number.svg'
import number2 from './images/number_2.svg'
import number3 from './images/number_3.svg'
import number4 from './images/number_4.svg'
import number5 from './images/number_5.svg'
import paste from './images/paste.svg'
import select from './images/select.svg'
import write from './images/write.svg'






function Form() {

    const [isLoading, setIsLoading] = useState(true)
    const [hasCalledAPI, setHasCalledAPI] = useState(true)


    return (
        <div>
            <div className="formTitle">
                <h1 className="headTitle">Letter of Recommendation</h1>
                <h2 className="headSub"> Let's Begin Writing!</h2>
                <p className="headP">Please answer as many questions as possible</p>
            </div>

            <br />
            <br />

            <form className="inputForm">

                <div className="questionBox">
                    <img src={write} className="numberSize" />
                    <div className="questionBoxText">
                        <label className="label">Who are you writing this letter for?</label>
                        <input type="text" className="input" placeholder="e.g. Michelle Choi and Kyushik Nam"></input>
                    </div>
                </div>

                <br />
                <br />

                <div className="questionBox">
                    <img src={write} className="numberSize" />
                    <div className="questionBoxText">
                        <label className="label">What is your relationship with the applicant?</label>
                        <input type="text" className="input" placeholder="e.g. I boss Kyushik around and tell him what to do."></input>
                    </div>
                </div>

                <br />
                <br />

                <div className="questionBox">
                    <img src={paste} className="numberSize" />
                    <div className="questionBoxText">
                        <label className="label">Please paste the job description.</label>
                        <textarea className="textareaInput" rows="10" placeholder="e.g. Google is looking for two software engineers who can dominate the world. "></textarea>
                    </div>
                </div>


                <br />
                <br />

                <div className="questionBox">
                    <img src={write} className="numberSize" />
                    <div className="questionBoxText">
                        <label className="label">Please describe any accomplishments of the individual.</label>
                        <textarea className="textareaInput" rows="10" placeholder="e.g. I created Google Maps and I graduated Summa Cum Laude at Harvard"></textarea>
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
                        <textarea className="textareaInput" rows="10" placeholder="e.g. I am fluent in React.js and in Python. I also have a very curious mind."></textarea>
                    </div>
                </div>

                <br />
                <br />

                {/* options */}

                <h1 style={{ textAlign: "center" }}>Options</h1>

                <div className="writingStylesDiv">
                    <img src={select} className="numberSize" />
                    <label className="label">Writing Styles</label>


                    <br />


                    <div className="styleContainer">
                        <input type="radio" id="formal" className="radioButton" name="writingStyle"></input>
                        <label htmlFor="formal" className="styleContainerText">
                            <h3>Formal</h3>
                            <ul>
                                <li>Professional tone.</li>
                                <li>Often used for academic or job-related recommendations.</li>
                            </ul>
                        </label>
                    </div>

                    <br />

                    <div className="styleContainer">
                        <input type="radio" id="narrative" className="radioButton" name="writingStyle"></input>
                        <label htmlFor="narrative" className="styleContainerText">
                            <h3>Narrative</h3>
                            <ul>
                                <li>Storytelling format, highlighting the person’s achievements and qualities through anecdotes and examples.</li>
                                <li>Often used for personal recommendations.</li>
                            </ul>
                        </label>
                    </div>

                    <br />

                    <div className="styleContainer">
                        <input type="radio" id="bulletPoint" className="radioButton" name="writingStyle"></input>
                        <label htmlFor="bulletPoint" className="styleContainerText">
                            <h3>Bullet Point</h3>
                            <ul>
                                <li>Structured with short, concise statements that highlight the person’s skills and achievements.</li>
                                <li>Often used when the recommendation is part of an online application or when the recipient requires a quick summary of the person’s qualifications.</li>
                            </ul>
                        </label>
                    </div>

                    <br />

                    <div className="styleContainer">
                        <input type="radio" id="comparative" className="radioButton" name="writingStyle"></input>
                        <label htmlFor="comparative" className="styleContainerText">
                            <h3>Comparative</h3>
                            <ul>
                                <li>Compares the person to others in their field, highlighting their strengths and qualifications. </li>
                                <li>Often used in academic or job-related recommendations.</li>
                            </ul>
                        </label>
                    </div>

                    <br />

                    <div className="styleContainer">
                        <input type="radio" id="persuasive" className="radioButton" name="writingStyle"></input>
                        <label htmlFor="persuasive" className="styleContainerText">
                            <h3>Persuasive</h3>
                            <ul>
                                <li>Includes strong statements of support and a clear endorsement of the person’s qualifications. </li>
                                <li>Often used when the competition for a position is high or when the person being recommended is seeking a promotion or career change.</li>
                            </ul>
                        </label>
                    </div>

                    <br />
                    <br />

                    <div className="questionBox">
                        <div className="questionBoxText">
                            <div className="textWithOptional">
                                <label className="label">Maximum Word Count</label>
                            </div>
                            <input className="textareaInput" rows="10" placeholder="e.g. 500 words."></input>
                        </div>
                    </div>

                </div>
                <br />
                <br />
                <div className="submitWrapper">

                    <input type="submit" className="submitButton"></input>
                </div>


            </form >

            <br />
            <br />

            {isLoading ? <Loading /> : null}
            
            {hasCalledAPI ? <Output/> : null}

        </div >
    )
}

export default Form