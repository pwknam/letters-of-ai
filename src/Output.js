import React from "react";
import './App.css';

function Output({response}) {
    return (
        <div>
            <h1>Letter of Recommendation</h1>
            <p>Edit and copy for your own use, or resubmit to generate another version!</p>
            <textarea className="textareaInput" rows="20" defaultValue={response}></textarea>
            <div className="thankYou"> 
                <h1>Thank you!</h1>
            </div>
        </div>
    )
}

export default Output