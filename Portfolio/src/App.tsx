import React from 'react';
import './App.css';
import Card from './Card';

class App extends React.Component {
  state = {
    data: null
  };
  // componentDidMount() {
  //   this.callBackendAPI()
  //     .then(res => this.setState({ data: res.express }))
  //     .catch(err => console.log(err));
  // }
  // fetching the GET route from the Express server which matches the GET route from server.js
  // callBackendAPI = async () => {
  //   const response = await fetch('/express_backend');
  //   const body = await response.json();

  //   if (response.status !== 200) {
  //     throw Error(body.message)
  //   }
  //   return body;
  // };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Faris Hijazi - Student, Developer, Open Source enthusiast.
          </p>
        </header>
        <div className='links'>
          <a href="https://discordapp.com/users/200804859849605121/"><i className="fab fa-discord"></i></a>

          <a href="https://github.com/The-afroman"><i className="fab fa-github"></i></a>

          <a href="https://www.linkedin.com/in/faris-hijazi00"><i className="fab fa-linkedin"></i></a>
        </div>
        <h1>Projects :</h1>
        <div className='Cards'>
          <div className='col'>
            <Card name="Firesight (HackDavis 2022)" description="A web application to predict the probability of fire occurring in any US city using a machine learning model that was trained on past fire and weather data. Built with javascript, node, vue, python, flask, sklearn. Created for HackDavis 2022" imgsrc={"/firesight.png"} link="https://devpost.com/software/firesight" />

            <Card name="Fitness tracking website" description="activity tracking website with mobile and desktop views with Google Oauth user authentication and login using HTML, CSS, Javascript, SQlite and Node/express for server and backend. Created for web design class." imgsrc={"/fitness_tracker.png"} link="https://github.com/The-afroman/Fitness-Tracker" />
          </div>

          <div className='col'>
            <Card name="WebGL 3D viewer" description="WebGL 3D viewing program, uses custom written glsl shaders for phong and gouraud lighting models with bump mapping for normals. Ability to interactively change lighting position color and diffuse and specular attributes of individual point or directional lights. Custom scene graph data structure to represent the scene. Final project for computer graphics class." imgsrc={"/webgl.png"} link="https://github.com/The-afroman/computer-graphics-3D-viewer" />

            <Card name="Personal Site" description="portfolio showcase (this site) created with react, express, node, typescript" imgsrc={"/portfolio.png"} link="https://github.com/The-afroman/Portfolio" />

          </div>

          <div className='col'>
            <Card name="UC Davis interactive webapp" description="A web app to visualize UC Davis revenue and expenses with charts and animations using HTML, Javascript, CSS, React and D3. Created as the final project for a web design class" imgsrc={"/slices.png"} link="https://github.com/The-afroman/ecs162-final-proj" />

            <Card name="HTML proxy server" description="HTML 1.1 compatible proxy server in python written for a computer networking class" imgsrc={"/webproxy.png"} link="https://github.com/The-afroman/ecs152a-proxy-server" />
          </div>
        </div>
        <h1>Resume :</h1>
        <div className="Resume">
          <iframe title="resume" src="https://docs.google.com/document/d/e/2PACX-1vQ-OzVIfAt11sODCZpznuIzpa9sUS14nYsHN0IGtHHkGxv_HBmkiRag5yB5N737nhhsxxmNPQOM31u0/pub?embedded=true" width="800px" height="1400px" frameBorder="0"></iframe>
        </div>

      </div>
    );
  }
}

export default App;
