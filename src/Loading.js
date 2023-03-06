import React from "react";
import './App.css';

//images
import magicWriting from './images/magicWriting.svg'

function Loading() {
    return (
        <div className="loadingContainer">
            <img src={magicWriting} className="loadingImage"/>
            <h3 className="loadingText">One moment while we magically write your letter!</h3>
        </div>
    )
}


export default Loading