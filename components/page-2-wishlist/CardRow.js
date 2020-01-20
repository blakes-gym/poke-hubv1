import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WindowCard from './WindowCard.js';

export default function CardRow({ pokemonOne, pokemonTwo }) {
  if (!pokemonTwo) {
    return (
      <Row>
        <Col className='p-0'>
          <WindowCard pokemon={pokemonOne} />
        </Col>
      </Row>
    );
  } else {
    return (
      <Row>
        <Col className='p-0'>
          <WindowCard pokemon={pokemonOne} />
        </Col>
        <Col>
          <WindowCard pokemon={pokemonTwo} />
        </Col>
      </Row>
    );
  }
}
