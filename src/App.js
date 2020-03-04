import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
// import { render } from '@testing-library/react';


const app = new Clarifai.App({
  apiKey: '0efdd1d172e443ca85a9f21241e06d60'
});

const ParticlesOptions = {
    particules: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
}
class App extends Component {
  constructor () {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
      this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    console.log('click');
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL, 
      "https://samples.clarifai.com/face-det.jpg")
      .then(
      function (response) {
        console.log(response);
        // do something with response
      },
      function (err) {
        // there was an error
      }
    );
  }

  render() {
    return (
      <div className="App">
        <Particles className='particules'
          params={ParticlesOptions}
        />
        <Navigation />
        <Logo/>
        <Rank />
        <ImageLinkForm 
        onInputChange={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
