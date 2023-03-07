import React from "react";
import './App.css';

function Output({ response, name }) {
    
    function handlePOST(){
        console.log({response})
        console.log({name})

        fetch("http://localhost:3000/letters", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                content: response
            })
        })


    }
    
    
    return (
        <div style={{ marginBottom: "5%" }}>
            <h1>Letter of Recommendation</h1>
            <p>Edit and copy for your own use, or resubmit to generate another version!</p>
            <textarea className="textareaInput" rows="20" defaultValue={response}></textarea>
            <div className="saveButton">
                <button className="button-28" onClick={handlePOST}>Save Letter</button>
            </div>
            <br />

            <div className="thankYou">
                <h1>Thank you!</h1>
            </div>
        </div>
    )
}

export default Output