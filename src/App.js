import React from 'react';
import Hello from './components/hello/Hello'
import HelloFunc from './components/hello/HelloFunc'

import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello React as functional way
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/* @see components/hello/Hello.js */}
      <Hello who="Jean-Luc" />

      {/* @see components/hello/HelloFunc.js */}
      <HelloFunc who="Casper" buttonStatus="disabled" />
    </div>
  );
}

export default App;
