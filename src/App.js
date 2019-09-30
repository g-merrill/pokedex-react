import React from 'react';

import { Route, Switch } from 'react-router-dom';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Section, Container } from 'react-bulma-components';

import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import PokeContainer from './components/PokeContainer';
import PokeDetail from './components/PokeDetail';
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
        
        <Switch>
          <Route exact path="/" render={ () => 
            <Section>
              <Container>
                <SearchBar 
                  handleChange={ this.handleChange } 
                />
                <PokeContainer 
                  pokemon={ this.state.pokemon } 
                />
              </Container>
            </Section>
          } />
          <Route path="/pokemon/:id" render={ props => 
            <PokeDetail 
              {...props}
              data={ data.pokemon[props.match.params.id - 1] }
            />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;
