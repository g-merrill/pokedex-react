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
    // We would need to bind the `this` keyword if handleSearch was a regular function declaration, not an arrow function
    // this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange = (e) => {
    let pokemon = data.pokemon;

    if (e.target.value) {
      pokemon = pokemon.filter(p => {
        return p.name.includes(e.target.value)
      });
    }

    this.setState({ pokemon })
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
