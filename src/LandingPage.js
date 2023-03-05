import React from "react";
import { useHistory } from "react-router-dom";
import letter from './images/letter_landing_page.svg'

function LandingPage() {
    const history = useHistory()

    function handleClick(){
        history.push("/form")
    }
    
    return (
        <div className="landingPage">
            <h1>Need help writing a letter of recommendation?</h1>
            <img src={letter} style={{width: "250px", height: "auto"}}/>
            <button onClick={handleClick}>Let's Begin!</button>
        </div>
    )
}

export default LandingPage