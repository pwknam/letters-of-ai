import React from "react";
import { useState } from 'react';
import './App.css';
import number from './images/number.svg'





function Form() {
    return (
        <div>
            <h1>Letter of Recommendation</h1>
            <h2> Let's Begin Writing!</h2>
            <p>Please answer as many questions as possible</p>

            <br></br>

            <form className="inputForm">
                <div style={{ display: "flex", justifyContent: "space-between"}}>
                    <div>
                        <img src={number} className="numberSize"/>
                    </div>
                    <div style={{ width: "100%", paddingLeft: "8px"}}>
                        <label className="label">Who are you writing this letter for?</label>
                        <input type="text" className="input" placeholder="e.g. Lorem Ipsum"></input>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form