import pokemonData from '../../data/dummyData.js';
import StatList from './StatList.js';
import Card from 'react-bootstrap/Card';

export default function PokemonRow({ pokemon }) {
  return (
    <Card>
      <Card.Header>
        <b>#{pokemon.DexNo}</b> {pokemon.Name}
      </Card.Header>
      <Card.Img variant='middle' src={pokemon.Img} />
      <Card.Title>Stats</Card.Title>
      <Card.Text>
        <StatList stats={pokemon.Stats} />
      </Card.Text>
    </Card>
  );
}
