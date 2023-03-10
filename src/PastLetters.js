import React, { useEffect, useState } from "react";
import './App.css';
import pastLogo from './images/letter_1.svg'
import PastRecLetterCard from "./PastRecLetterCard";
import PastCoverLetterCard from "./PastCoverLetterCard";
import { useHistory } from "react-router-dom";

function PastLetters() {
    const [recLetters, setRecLetters] = useState([])
    const [coverLetters, setCoverLetters] = useState([])

    useEffect(() => {
        fetch("https://jet-fluoridated-justice.glitch.me/RecLetters")
            .then((r) => r.json())
            .then((data) => setRecLetters(data))
    }, [])

    const renderRecLetters = recLetters.map((letter) => {
        return <PastRecLetterCard key={letter.id} letterData={letter} />
    })

    useEffect(() => {
        fetch("https://jet-fluoridated-justice.glitch.me/CoverLetters")
            .then((r) => r.json())
            .then((data) => setCoverLetters(data))
    }, [])

    const renderCoverLetters = coverLetters.map((coverLetter) => {
        return <PastCoverLetterCard key={coverLetter.id} coverLetterData={coverLetter} />
    })

    const history = useHistory()

    function handleClick() {
        history.push("/")
    }


    return (
        <div style={{ marginBottom: "5%" }}>
            <div className="pastLettersHeader">
                <h1>View Past Letters</h1>
                <img src={pastLogo} className="pastImage" />
            </div>
            <br />
            <h1 className="pastLettersHeader" style={{ color: "#F67062" }}>Recommendation Letters</h1>
            {renderRecLetters}
            <br />
            <h1 className="pastLettersHeader" style={{ color: "#F67062" }}>Cover Letters</h1>
            {renderCoverLetters}
            <br />
            <div className="saveButton">
                <button onClick={handleClick} className="button-28">Let's Write Again</button>
            </div>

        </div>
    )
}

export default PastLetters