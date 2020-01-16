import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import PokemonStats from './PokemonStats.js';
import StatsGraph from './StatsGraph.js';
import Moves from './Moves.js';

export default function CollapseData({ pokemon, idx }) {
  return (
    <Accordion.Collapse eventKey={`${idx}`}>
      <Card.Body>
        <div className='dataContainer'>
          <PokemonStats pokemon={pokemon}></PokemonStats>
          <StatsGraph stats={pokemon.stats}></StatsGraph>
          <Moves />
        </div>
      </Card.Body>
    </Accordion.Collapse>
  );
}
