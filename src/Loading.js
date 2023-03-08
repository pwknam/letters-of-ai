import React from "react";
import './App.css';


function Loading({name}) {
    return (
        <div className="loadingContainer">
            <iframe src="https://giphy.com/embed/pALw8LdftuqAw" width="480" height="287" style={{borderRadius:"8px"}} allowFullScreen></iframe>
            <h3 className="loadingText">One moment while we magically write your letter for {name}!</h3>
        </div>
    )
}


export default Loading