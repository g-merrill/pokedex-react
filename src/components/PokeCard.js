import React from 'react';

const PokeCard = (props) => {
  const printableTypes = props.typesArray.map(type => {
    return <p><strong>Type:</strong> { type.name }</p>;
  });

  return (
    <div className="PokeCard">
      <img src={ props.frontImage } alt={ props.name } />
      <p>
        <strong>Name:</strong> { props.name.charAt(0).toUpperCase() + props.name.slice(1) }
      </p>
      { printableTypes }
    </div>
  );
}

export default PokeCard;