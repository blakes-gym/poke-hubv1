import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import PokemonStats from './PokemonStats.js';
import StatsGraph from './StatsGraph.js';
import Moves from './Moves.js';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { local } from '../../constants';

function getWishlist() {
  axios.get(local + '/wishlist');
}

function handleRemove(pokemonObj) {
  // remove pokemon from wishlist on click
  // update the database to false then re-render list of pokemon
  return function(e) {
    console.log('remove ', pokemonObj);
    axios
      .delete(local + `/wishlist/${pokemonObj.id}`)
      .then(() => getWishlist())
      .catch(err => console.log('err in DELETE', err));
  };
}

export default function CollapseData({ allPokemon, pokemon, idx }) {
  return (
    <Accordion.Collapse eventKey={`${idx}`}>
      <Card.Body>
        <div className='dataContainer'>
          <PokemonStats pokemon={pokemon.wlPoke}></PokemonStats>
          <StatsGraph pokemon={pokemon.wlPoke}></StatsGraph>
          <Moves allPokemon={allPokemon} />
        </div>
        <Button
          variant='danger'
          block
          onClick={handleRemove(pokemon)}
          name={pokemon.wlPoke.name}
        >
          Remove {pokemon.wlPoke.name}
        </Button>
      </Card.Body>
    </Accordion.Collapse>
  );
}
