import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Form from './Form';
import LandingPage from './LandingPage';

function App() {
  return (
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
  );
}

export default App;
