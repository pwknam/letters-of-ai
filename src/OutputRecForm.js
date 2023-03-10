import React, { useState } from "react";
import './App.css';

function OutputRecForm({ response, name }) {
    const [isCopy, setIsCopy] = useState(false)
    const [isSave, setIsSave] = useState(false)


    function handlePOST() {
        console.log({ response })
        console.log({ name })

        fetch("https://jet-fluoridated-justice.glitch.me/RecLetters", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                content: response
            })
        })
        setIsSave(true)

    }

    const handleCopyClick = async () => {
        try {
            await navigator.clipboard.writeText(response);
            setIsCopy(true)
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };


    return (
        <div style={{ marginBottom: "5%" }}>
            <h1>Letter of Recommendation</h1>
            <p>Edit and copy for your own use, or resubmit to generate another version!</p>
            <textarea className="textareaInput" rows="20" defaultValue={response}></textarea>
            <br />
            <br />
            <div className="saveButton">
                <button className="button-28" onClick={handlePOST}>{isSave ? "Letter Saved" : "Save"}</button>
                <button className="button-28" onClick={handleCopyClick}>{isCopy ? "Copied" : "Copy"}</button>
            </div>
            <br />

            <div className="thankYou">
                <h1>Thank you!</h1>
            </div>
        </div>
    )
}

export default OutputRecForm