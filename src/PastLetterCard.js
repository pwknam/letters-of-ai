import React from "react";
import './App.css';


function PastLetterCard({letterData}) {
    return (
        <div>
            <h1 style={{color: "#4B44BE"}}>Written for {letterData.name}</h1>
            <textarea className="textareaInput" rows="20" >{letterData.content}</textarea>
        </div>
    )
}

export default PastLetterCard