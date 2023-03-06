import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Form from './Form';
import LandingPage from './LandingPage';
import axios from "axios";
import React, {useState} from 'react'

function App() {


  return (
    <>
    <div className="App">

      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>

        <Route path="/form">
          <Form />
        </Route>
      </Switch>
    </div>
        {/* <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{response}</p>
      </div> */}
      </>
  );
}

export default App;

