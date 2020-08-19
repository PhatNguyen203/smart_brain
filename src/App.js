import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imageLink/ImageLinkForm'
import Particles from 'react-particles-js'
import './App.css';

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

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }
  onInputChangeHandler = (event) => {
    this.setState({
      input: event.target.value
    });
  }
  btnSubmitButtonHandler = () => {
    this.setState({
      imageUrl: this.state.input
    });
    console.log(this.state.imageUrl);
  }
  render(){
    return (
      <div className="App">
         <Particles className='particles'
            params={ParticleOptions} />
        <Navigation />
        <Logo />
        <ImageLinkForm onInputChange={this.onInputChangeHandler} onSubmitButton={this.btnSubmitButtonHandler}/>
      </div>
    );
  }
}

export default App;
