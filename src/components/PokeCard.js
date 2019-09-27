import React from 'react';

const PokeCard = (props) => {
  let types = props.types.map((t, idx) => <li style={{ backgroundColor: t.color }} key={idx}>{ t.name }</li>);

  return (
    <div>
      <img src={ props.avatar } alt={ props.name } />
      <p>
        <strong>Name:</strong> { props.name }
      </p>
      <strong>Type:</strong>
      <ul>
        { types }
      </ul>
    </div>
  );
}

export default PokeCard;
