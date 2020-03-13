import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name: "Dr. Mahfuz Rahman",
    job: "singer"
  }

  var person2 = {
    name: "Eva Ranman",
    job: "singer"
  }

  var style= {
    color: 'red',
    backgroundColor: "yellow"
  }
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done with Brother <code>src/App.js</code> and save to reload.
        </p>
        <h1 className= "" style={style} >My heading: {person.name+ " "+person.job}</h1>
        <h3 style= {{color: 'cyan', backgroundColor: 'white'}}>Fav:{person2.name+ " "+ person2.job } </h3>
        <p>My first Paragraph</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
