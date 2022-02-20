import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {BrowserRouter as Router} from 'react-router-dom';
import { Route, Switch } from "react-router";
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';

function App() {
  // const [getMessage, setGetMessage] = useState({})

  // useEffect(()=>{
  //   axios.get('http://localhost:5000/flask/hello').then(response => {
  //     console.log("SUCCESS", response)
  //     setGetMessage(response)
  //   }).catch(error => {
  //     console.log(error)
  //   })

  // }, [])
  return (
    <div className="App">
      {/*<header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>{getMessage.status === 200 ? 
          <h3>{getMessage.data.message}</h3>
          :
          <h3>LOADING</h3>}
        </div> 
      </header>*/}
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
