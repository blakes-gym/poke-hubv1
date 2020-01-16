import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import PokemonBanner from './PokemonBanner.js';
import CollapseData from './CollapseData.js';
import data from '../../data/dummyData.js';

export default function PokemonRow_New() {
  return (
    <div>
      <Accordion>
        {data.map((pokemon, idx) => {
          return (
            <Card key={idx}>
              <PokemonBanner idx={idx} pokemon={pokemon} />
              <CollapseData idx={idx} pokemon={pokemon} />
            </Card>
          );
        })}
      </Accordion>
    </div>
  );
}
