import React from "react";
import logo from './assets/logos/marte-logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://www.instagram.com/marte.zine/"><img src={logo} className="marte-logo" alt="logo" /></a>
      </header>
    </div>
  );
}

export default App;
