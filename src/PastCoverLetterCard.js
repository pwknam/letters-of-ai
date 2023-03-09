import React from "react";
import './App.css';


function PastCoverLetterCard({coverLetterData}) {
    return (
        <div>
            <h1 style={{color: "#4B44BE"}}>Written for {coverLetterData.name}</h1>
            <textarea className="textareaInput" rows="20" >{coverLetterData.content}</textarea>
        </div>
    )
}

export default PastCoverLetterCard