import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import PokemonStats from './PokemonStats.js';
import StatsGraph from './StatsGraph.js';
import Moves from './Moves.js';

export default function CollapseData({ allPokemon, pokemon, idx }) {
  console.log('COLLAPSEDATA', pokemon);
  return (
    <Accordion.Collapse eventKey={`${idx}`}>
      <Card.Body>
        <div className='dataContainer'>
          <PokemonStats pokemon={pokemon}></PokemonStats>
          <StatsGraph pokemon={pokemon}></StatsGraph>
          <Moves allPokemon={allPokemon} />
        </div>
      </Card.Body>
    </Accordion.Collapse>
  );
}
