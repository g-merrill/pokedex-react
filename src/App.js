import React from 'react';
import Navbar from './components/Navbar';
import PokeContainer from './components/PokeContainer';
import './App.css';
let data = require('./originalNine.json');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: data.pokemon
    }
  }

  render() {

    return (
      <div className="App">
        <Navbar />
        <PokeContainer pokemon={ this.state.pokemon } />
      </div>
    );
  }
}

export default App;
