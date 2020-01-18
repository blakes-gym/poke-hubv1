import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WindowCard from './WindowCard.js';

export default function CardRow({ pokemonOne, pokemonTwo }) {
  return (
    <Row>
      <Col>
        <WindowCard pokemon={pokemonOne} />
      </Col>
      <Col>
        <WindowCard pokemon={pokemonTwo} />
      </Col>
    </Row>
  );
}