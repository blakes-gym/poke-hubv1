import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import PokemonBanner from './PokemonBanner.js';
import CollapseData from './CollapseData.js';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function handleRemove(pokemonObj) {
  // remove pokemon from wishlist on click
  // update the database to false then re-render list of pokemon
  return function(e) {
    console.log(`Remove ${e.target.name}`);
    // console.log('obj', pokemonObj);
    axios
      .put('/wishlist', { pokemonId: pokemonObj.id })
      .then(data => console.log(data))
      .catch(err => console.log('err in PUT', err));
  };
}

export default function PokemonRow({ pokemonData }) {
  return (
    <div className='d-sm-none'>
      <Accordion>
        {pokemonData.pokemon.map((pokemon, idx) => {
          return (
            <Card key={idx}>
              <PokemonBanner idx={idx} pokemon={pokemon} />
              <CollapseData
                idx={idx}
                pokemon={pokemon}
                allPokemon={pokemonData}
              />
              <Button
                variant='danger'
                block
                onClick={handleRemove(pokemon)}
                name={pokemon.name}
              >
                Remove {pokemon.name}
              </Button>
            </Card>
          );
        })}
      </Accordion>
    </div>
  );
}
