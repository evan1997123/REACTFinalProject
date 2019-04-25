import React, { Component } from 'react';
import CardHolder from "./CardHolder";
import PugHolder from "./PugHolder";
import './App.css';
import { Route, Link } from "react-router-dom";

class App extends Component {
  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
  // }
  render() {
    return (
      <div>
        <Route path="/counselors" component={CardHolder} />
        <Route path="/pugs" component={PugHolder} />
        <Link to="/pugs">See pugs</Link>
        <Link to="/counselors">See Counselors</Link>
      </div>
    );
  }
}

export default App;
