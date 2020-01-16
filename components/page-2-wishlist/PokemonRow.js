import StatList from './StatList.js';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function PokemonRow({ pokemon }) {
  return (
    <>
      <Card>
        <Card.Img variant='top' src={pokemon.Sprite} />
        <Card.Body>
          <Card.Title>
            #{pokemon.DexNo} {pokemon.Name}
          </Card.Title>
          <StatList stats={pokemon.Stats} />
          <br></br>
          <Button variant='primary'>Add to Team</Button>
        </Card.Body>
      </Card>
    </>
  );
}
