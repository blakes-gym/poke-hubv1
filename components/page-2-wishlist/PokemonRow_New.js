import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import StatsCard from './StatsCard.js';
import Badge from 'react-bootstrap/Badge';
import HexByType from '../../hexData.js';
import data from '../../data/dummyData.js';
import TeamMemberData from './PokemonData.js';
import TeamMemberGraph from './StatsGraph.js';

export default function Team() {
  return (
    <Accordion>
      {data.map((pokemon, idx) => {
        return (
          <Card key={idx}>
            <StatsCard idx={idx} pokemon={pokemon} />
            <Accordion.Collapse eventKey={`${idx}`}>
              <Card.Body>
                <div className='dataContainer'>
                  <TeamMemberData pokemon={pokemon}></TeamMemberData>
                  <TeamMemberGraph stats={pokemon.Stats}></TeamMemberGraph>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        );
      })}
    </Accordion>
  );
}
