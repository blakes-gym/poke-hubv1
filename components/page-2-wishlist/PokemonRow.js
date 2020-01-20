import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import PokemonBanner from './PokemonBanner.js';
import CollapseData from './CollapseData.js';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import PikaJulian from '../PikaJulian.js';

function handleRemove(pokemonObj) {
  // remove pokemon from wishlist on click
  // update the database to false then re-render list of pokemon
  return function(e) {
    console.log(`Remove ${e.target.name}`);
    axios
      .put('/wishlist', { pokemonId: pokemonObj.id })
      .then(data => console.log(data))
      .catch(err => console.log('err in PUT', err));
  };
}

export default function PokemonRow({ pokemonData }) {
  console.log('POKEMONROW', pokemonData);
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
                  pokemon={pokemon.wlPoke}
                  allPokemon={pokemonData}
                />
                <Button
                  variant='danger'
                  block
                  onClick={handleRemove(pokemon)}
                  name={pokemon.wlPoke.name}
                >
                  Remove {pokemon.wlPoke.name}
                </Button>
              </Card>
            );
          })}
        </Accordion>
      </div>
    );
  }
}
