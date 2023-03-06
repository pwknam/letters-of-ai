import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Form from './Form';
import LandingPage from './LandingPage';
import PastLetters from './PastLetters';

function App() {
  return (
    <div className="App">
<nav>
  <Link to="/">Home</Link>
  <Link to="/form">Form</Link>
  <Link to="/pastletters">View Past Letters</Link>
</nav>



      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>

        <Route path="/form">
          <Form />
        </Route>

        <Route path="/pastletteres">
          <PastLetters />
        </Route>


        
      </Switch>
    </div>
  );
}

export default App;
