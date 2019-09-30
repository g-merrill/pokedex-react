import React from 'react';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Card } from 'react-bulma-components';

import '../styles/PokeCard.css'

const PokeCard = (props) => {
  const printableTypes = props.typesArray.map((type, idx) => {
    return <p key={idx}><strong>Type:</strong> { type.name }</p>;
  });

  return (
    <div className="PokeCard column is-one-third">
      <Card>
        <div className="card-image" style={{
          backgroundColor: props.typesArray[0].color
        }}>
          <img src={ props.frontImage } alt={ props.name } />
        </div>
        <div className="card-content">
          <h1 class="title is-3">
            { props.name.charAt(0).toUpperCase() + props.name.slice(1) }
          </h1>
          { printableTypes }
        </div>
      </Card>
    </div>
  );
}

export default PokeCard;
