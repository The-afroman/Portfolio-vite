import React from 'react';
import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Faris Hijazi
        </p>
        <a
          className="App-link"
          href="https://github.com/The-afroman"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </header>
      <div className='Cards'>
        <Card name="example1" description="This is an example project" imgsrc="temp.jpg"/>
        <Card name="example2" description="This is an example project" imgsrc="temp.jpg"/>
        <Card name="example2" description="This is an example project" imgsrc="temp.jpg"/>
        <Card name="example3" description="This is an example project" imgsrc="temp.jpg"/>
        <Card name="example3" description="This is an example project" imgsrc="temp.jpg"/>
        <Card name="example3" description="This is an example project" imgsrc="temp.jpg"/>
      </div>
      
    </div>
  );
}

export default App;
