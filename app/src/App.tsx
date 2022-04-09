import React from 'react';
import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Card name="count" />
      </header>
      <div>
        <p>
          content
        </p>
      </div>
    </div>
  );
}

export default App;
