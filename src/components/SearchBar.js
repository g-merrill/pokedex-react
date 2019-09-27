import React, { Component } from 'react';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Columns } from 'react-bulma-components';

export class SearchBar extends Component {
  render() {
    return (
      <Columns>
        <div className="column is-full">
          <input 
            className="input" 
            type="text" 
            name="search" 
            placeholder="Search your collection..."
            onChange={ (e) => this.props.handleChange(e) }
          />
        </div>
      </Columns>
    );
  }
}

export default SearchBar;
