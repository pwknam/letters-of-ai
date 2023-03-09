import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import RecForm from './RecForm';
import CoverForm from './CoverForm';
import LandingPage from './LandingPage';

import axios from "axios";
import React, { useState } from 'react'

import PastLetters from './PastLetters';

import logo from './images/newLogo.svg'

function App() {


  return (

    <div className="App">
      <nav className='navBar'>
        <Link className="companyName" to="/">Letters of AI</Link>

        <div className='pages'>
          <Link className="link" to="/recform">Recommendation Letter</Link>
          <Link className="link" to="/coverform">Cover Letter</Link>
          <Link className="link" to="/pastletters">View Past Letters</Link>
        </div>

        <Link to="/"><img src={logo} className="linkImage" /></Link>
      </nav>



      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>

        <Route path="/recform">
          <RecForm />
        </Route>

        <Route path="/coverform">
          <CoverForm />
        </Route>

        <Route path="/pastletters">
          <PastLetters />
        </Route>



      </Switch>
    </div>
  );
}

export default App;

