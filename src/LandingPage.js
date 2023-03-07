import React from "react";
import { useHistory } from "react-router-dom";
import letter from './images/letter_landing_page.svg'
import woman from './images/womanWriting.svg'

function LandingPage() {
    const history = useHistory()

    function handleClick(){
        history.push("/form")
    }
    
    return (
        <div className="landingPage">
            <h1 style={{color: "#4B44BE", fontSize: "40px"}}>Discover a new way to write letters!</h1>
            <img src={woman} style={{width: "250px", height: "auto"}}/>
            <br/>
            <button onClick={handleClick} class="button-28">Let's Begin!</button>
        </div>
    )
}

export default LandingPage
