import React, { Component } from 'react';
import { Hero, Columns, Container } from 'react-bulma-components';

export class PokeDetail extends Component {
  render() {
    let poke = {...this.props.data};

    return (
      <div>
        <Hero
          style={{
            backgroundColor: poke.types[0].color,
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div className="hero-body">
            <Columns>
              <div className="column is-full">
                <h1 className="title is-2">{ poke.name.charAt(0).toUpperCase() + poke.name.slice(1) }</h1>

                <img 
                  style={{
                    position: 'absolute',
                    right: 0,
                    opacity: 0.7,
                    top: '-55px',
                    width: '300px'
                  }}
                  src={ poke.sprites.front_shiny } 
                  alt={ poke.name }
                />
              </div>
            </Columns>
          </div>
        </Hero>
      </div>
    );
  }
}

export default PokeDetail;