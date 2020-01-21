import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WindowCard from './WindowCard.js';

export default function CardRow({ pokemonOne, pokemonTwo, allPokemon }) {
  if (!pokemonTwo) {
    return (
      <Row>
        <Col className='p-0'>
          <WindowCard pokemon={pokemonOne} allPokemon={allPokemon} />
        </Col>
      </Row>
    );
  } else {
    return (
      <Row>
        <Col className='p-0'>
          <WindowCard pokemon={pokemonOne} allPokemon={allPokemon} />
        </Col>
        <Col>
          <WindowCard pokemon={pokemonTwo} allPokemon={allPokemon} />
        </Col>
      </Row>
    );
  }
}
