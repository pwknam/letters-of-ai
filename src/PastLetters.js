import React, { useEffect, useState } from "react";
import './App.css';
import pastLogo from './images/pastLetters.svg'
import PastLetterCard from "./PastLetterCard";

function PastLetters() {
const [letters, setLetters] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/letters")
            .then((r) => r.json())
            .then((data) => setLetters(data))
    }, [])

    const renderLetters = letters.map((letter)=>{
        return <PastLetterCard key={letter.id} letterData = {letter}/>
    })

    return (
        <div>
            <div className="pastLettersHeader">
                <h1>View Past Letters</h1>
                <img src={pastLogo} className="pastImage" />
            </div>
            <br />
            {renderLetters}

        </div>
    )
}

export default PastLetters