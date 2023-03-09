import React from "react";
import { useHistory } from "react-router-dom";
import letter from './images/letter_landing_page.svg'
import woman from './images/womanWriting.svg'

function LandingPage() {
    const history = useHistory()

    function handleClickRec() {
        history.push("/recform")
    }

    function handleClickCover() {
        history.push("/coverform")
    }

    return (
        <div className="landingPage">
            <h1 style={{ color: "#4B44BE", fontSize: "40px" }}>Discover a new way to write letters!</h1>
            <img src={woman} style={{ width: "250px", height: "auto" }} />
            <br />
            <div className="homeButtons">
                <button onClick={handleClickRec} className="button-28" style={{marginRight:"5px"}}>Recommendation Letter</button>
                <button onClick={handleClickCover} className="button-28" style={{marginLeft:"5px"}}>Cover Letter</button>
            </div>

        </div>
    )
}

export default LandingPage

