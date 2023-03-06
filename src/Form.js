import React from "react";
import { useState } from 'react';
import './App.css';
import Question from "./Question";
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
   
    
    return (
        <div>
            <div className="formTitle">
                <h1>Letter of Recommendation</h1>
                <h2> Let's Begin Writing!</h2>
                <p>Please answer as many questions as possible</p>
            </div>

            <br />

            <form className="inputForm">

                <div className="questionBox">
                    <img src={number} className="numberSize" />
                    <div className="questionBoxText">
                        <label className="label">Who are you writing this letter for?</label>
                        <input type="text" className="input" placeholder="e.g. Michelle Choi and Kyushik Nam"></input>
                    </div>
                </div>

                <br />
                <br />

                <div className="questionBox">
                    <img src={number2} className="numberSize" />
                    <div className="questionBoxText">
                        <label className="label">What is your relationship with the applicant?</label>
                        <input type="text" className="input" placeholder="e.g. I boss Kyushik around and tell him what to do."></input>
                    </div>
                </div>

                <br />
                <br />

                <div className="questionBox">
                    <img src={number3} className="numberSize" />
                    <div className="questionBoxText">
                        <label className="label">What is the name of the company?</label>
                        <input type="text" className="input" placeholder="e.g. Apple, Inc."></input>
                    </div>
                </div>

                <br />
                <br />

                <div className="questionBox">
                    <img src={number4} className="numberSize" />
                    <div className="questionBoxText">
                        <label className="label">What is the job title?</label>
                        <input type="text" className="input" placeholder="e.g. Software Engineer on Apple Pay"></input>
                    </div>
                </div>

                <br />
                <br />

                <div className="questionBox">
                    <img src={number5} className="numberSize" />
                    <div className="questionBoxText">
                        <label className="label">What is the job description?</label>
                        <textarea className="textareaInput" rows="10" placeholder="e.g. Make sure you develop a product that overchages and under delivers. "></textarea>
                    </div>
                </div>

                <br />
                <br />

                <div className="questionBox">
                    <img src={number6} className="numberSize" />
                    <div className="questionBoxText">
                        <label className="label">What are the job qualifications?</label>
                        <textarea className="textareaInput" rows="10" placeholder="e.g. World domination mindset."></textarea>
                    </div>
                </div>

                <br />
                <br />

                <div className="questionBox">
                    <img src={number7} className="numberSize" />
                    <div className="questionBoxText">
                        <label className="label">Please describe any professional accomplishments of the individual.</label>
                        <textarea className="textareaInput" rows="10" placeholder="e.g. This product."></textarea>
                    </div>
                </div>

                <br />
                <br />

                <div className="questionBox">
                    <img src={number8} className="numberSize" />
                    <div className="questionBoxText">
                        <div className="textWithOptional">
                            <label className="label">What are relevant skills the individual possesses?</label>
                            <label className="optional">Optional</label>
                        </div>
                        <textarea className="textareaInput" rows="10" placeholder="e.g. All the programming languages."></textarea>
                    </div>
                </div>

                <br />
                <br />

                <div className="questionBox">
                    <img src={number9} className="numberSize" />
                    <div className="questionBoxText">
                        <div className="textWithOptional">
                            <label className="label">What personal qualities would you like to highlight?</label>
                            <label className="optional">Optional</label>
                        </div>
                        <textarea className="textareaInput" rows="10" placeholder="e.g. Very generous."></textarea>
                    </div>
                </div>

                <br />
                <br />

                <div className="questionBox">
                    <img src={number10} className="numberSize" />
                    <div className="questionBoxText">
                        <div className="textWithOptional">
                            <label className="label">What are some of the individual’s greatest strengths?</label>
                            <label className="optional">Optional</label>
                        </div>
                        <textarea className="textareaInput" rows="10" placeholder="e.g. Positive."></textarea>
                    </div>
                </div>

                <br />
                <br />

                <div className="questionBox">
                    <img src={number11} className="numberSize" />
                    <div className="questionBoxText">
                        <div className="textWithOptional">
                            <label className="label">What are some relevant academic accomplishments?</label>
                            <label className="optional">Optional</label>
                        </div>
                        <textarea className="textareaInput" rows="10" placeholder="e.g. GED."></textarea>
                    </div>
                </div>

                <br />
                <br />

                {/* options */}

                <h1 style={{ textAlign: "center" }}>Options</h1>

                <div className="writingStylesDiv">
                    <label className="label">Writing Styles</label>

                    <br />
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
                <div className="submitWrapper">

                    <input type="submit" className="submitButton"></input>
                </div>


            </form >

            <br />
            <br />

        </div >
    )
}

export default Form