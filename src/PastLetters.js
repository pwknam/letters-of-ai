import React, { useEffect, useState } from "react";
import './App.css';
import pastLogo from './images/letter_1.svg'
import PastLetterCard from "./PastLetterCard";
import { useHistory } from "react-router-dom";

function PastLetters() {
    const [letters, setLetters] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/letters")
            .then((r) => r.json())
            .then((data) => setLetters(data))
    }, [])

    const renderLetters = letters.map((letter) => {
        return <PastLetterCard key={letter.id} letterData={letter} />
    })

    const history = useHistory() 

    function handleClick(){
        history.push("/form")
    }


    return (
        <div style={{ marginBottom: "5%" }}>
            <div className="pastLettersHeader">
                <h1>View Past Letters</h1>
                <img src={pastLogo} className="pastImage" />
            </div>
            <br />
            {renderLetters}
            <br />
            <div className="saveButton">
                <button onClick={handleClick}className="button-28">Go Write!</button>
            </div>

        </div>
    )
}

export default PastLetters