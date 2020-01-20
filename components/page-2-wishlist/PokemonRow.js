import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import PokemonBanner from './PokemonBanner.js';
import CollapseData from './CollapseData.js';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import PikaJulian from '../PikaJulian.js';

export default function PokemonRow({ pokemonData }) {
  if (!pokemonData) {
    return (
      <div className='d-flex d-sm-none'>
        <div className='m-auto' style={{ textAlign: 'center' }}>
          <h4>There are no Pokémon in your wishlist!</h4>
          <PikaJulian />
        </div>
      </div>
    );
  } else {
    return (
      <div className='d-sm-none'>
        <Accordion>
          {pokemonData.map((pokemon, idx) => {
            return (
              <Card key={idx}>
                <PokemonBanner idx={idx} pokemon={pokemon.wlPoke} />
                <CollapseData
                  idx={idx}
                  pokemon={pokemon}
                  allPokemon={pokemonData}
                />
              </Card>
            );
          })}
        </Accordion>
      </div>
    );
  }
}
