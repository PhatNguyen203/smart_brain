import React from 'react';
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

function App() {
  return (
    <div className="App">
       <Particles className='particles'
          params={ParticleOptions} />
      <Navigation />
      <Logo />
      <ImageLinkForm />
    </div>
  );
}

export default App;
