import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imageLink/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/signin/Signin';
import Register from './components/register/Register';
import Particles from 'react-particles-js';
import './App.css';
import Clarifai from 'clarifai';

const ParticleOptions = {
  "particles": {
    "number": {
        "value": 160,
        "density": {
            "enable": false
        }
    },
    "size": {
        "value": 10,
        "random": true
    },
    "move": {
        "direction": "bottom",
        "out_mode": "out"
    },
    "line_linked": {
        "enable": false
    }
},
"interactivity": {
    "events": {
        "onclick": {
            "enable": true,
            "mode": "remove"
        }
    },
    "modes": {
        "remove": {
            "particles_nb": 10
        }
    }
  }
}
const app = new Clarifai.App({
  apiKey:'1e0099036202471eaf8153c52ad9673a'
});

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignined: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    };
  };

  onInputChangeHandler = (event) => {
    this.setState({
      input: event.target.value
    });
  }
  displayFaceBox = (box) => {
    this.setState({
      box: box
    });
  }
  btnSubmitButtonHandler = () => {
    this.setState({
      imageUrl: this.state.input
    });
    app.models
      .predict( Clarifai.FACE_DETECT_MODEL,this.state.input)
      .then(res => {
        this.displayFaceBox(this.calculateFaceLocation(res));
      })
      .catch(err => console.log(err));
  };
  calculateFaceLocation = (data) =>{
    const face = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: face.left_col * width,
      topRow: face.top_row * height,
      rightCol: width - (face.right_col * width),
      bottomRow: height - (face.bottom_row * height)
    }
  }
  onRouteChange = (route) => {
    this.setState({
      route: route
    });
  }

  render(){
    const {imageUrl, box, route} = this.state;
    return (
      <div className="App">
         <Particles className='particles'
            params={ParticleOptions} />
        <Navigation onRouteChange = {this.onRouteChange} />
        {
          route === 'home'
          ?<div>
            <Logo />
            <ImageLinkForm 
              onInputChange={this.onInputChangeHandler} 
              onSubmitButton={this.btnSubmitButtonHandler}
            />
            <FaceRecognition 
              imageUrl={imageUrl} 
              box={box} 
            />
          </div>
          :(
            route === 'signin'
            ?<Signin onRouteChange={this.onRouteChange} />
            :<Register onRouteChange = {this.onRouteChange} />
          )
        }
        
      
      </div>
    );
  }
}

export default App;
