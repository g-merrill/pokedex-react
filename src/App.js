import React from 'react';
import Navbar from './components/Navbar';
import PokeContainer from './components/PokeContainer';
import './App.css';
let data = require('./originalNine.json');

class App extends React.Component {

  render() {
    console.log(data);

    return (
      <div className="App">
        <Navbar />
        <PokeContainer />
      </div>
    );
  }
}

export default App;
