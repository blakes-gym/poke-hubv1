import pokemonData from '../../data/dummyData.js';
import StatList from './StatList.js';
import Card from 'react-bootstrap/Card';

export default function PokemonRow({ pokemon }) {
  return (
    <Card>
      <Card.Header>
        #{pokemon.DexNo} {pokemon.Name}
      </Card.Header>
      <Card.Img variant='' />
      <Card.Title>Stats</Card.Title>
      <Card.Text>
        <StatList stats={pokemon.Stats} />
      </Card.Text>
    </Card>
  );
}
