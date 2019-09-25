import React from 'react';
import './App.css';
let data = require('./originalNine.json');

class App extends React.Component {

  render() {
    console.log(data);

    return (
      <div className="App">
        <h1>Pokedex</h1>
      </div>
    );
  }
}

export default App;
