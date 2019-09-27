import React from 'react';

const SearchForm = (props) => {
  return (
    <div>
      <label htmlFor="search">
        Search 
        <input 
          type="text" 
          name="search" 
          onChange={ (e) => props.handleSearch(e) }
        />  
      </label>
    </div>
  );
};

export default SearchForm;
