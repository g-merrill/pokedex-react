import React from 'react';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Section, Container } from 'react-bulma-components';

import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import PokeContainer from './components/PokeContainer';
import './App.css';
let data = require('./originalNine.json');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: data.pokemon
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let pokemon = data.pokemon;

    if (e.target.value) {
      pokemon = pokemon.filter(poke => poke.name.includes(e.target.value.toLowerCase()));
    }

    this.setState({
      pokemon
    })
  }

  render() {

    return (
      <div className="App">
        <Navbar />

        <Section>
          <Container>
            <SearchBar handleChange={ this.handleChange } />
            <PokeContainer pokemon={ this.state.pokemon } />
          </Container>
        </Section>
      </div>
    );
  }
}

export default App;
