import React from "react";
import './App.css';

function Output() {
    return (
        <div>
            <h1>Letter of Recommendation</h1>
            <p>Edit and copy for your own use, or resubmit to generate another version!</p>
            <textarea className="textareaInput" rows="20" placeholder="e.g. Dear Sundar, please hire Kyushik Nam ASAP!"></textarea>
            <div className="thankYou"> 
                <h1>Thank you!</h1>
            </div>
        </div>
    )
}

export default Output