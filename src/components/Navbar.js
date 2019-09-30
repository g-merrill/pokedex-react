import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Navbar as BulmaNav } from 'react-bulma-components';

const Navbar = () => {
  return(
    <BulmaNav>
      <div className="container">
        <div className="navbar-brand">
          <img className="navbar-item" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png" alt="logo" />
          <h1 className="navbar-item title is-3">Pokedex</h1>
        </div>
      </div>
    </BulmaNav>
  );
}

export default Navbar;