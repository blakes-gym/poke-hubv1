import StatsGraph from './StatsGraph.js';
import Moves from './Moves.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function WindowDropdown({ pokemon }) {
  return (
    <Row>
      <Col>
        <StatsGraph pokemon={pokemon.wlPoke} />
      </Col>
      <Col>
        <Moves />
      </Col>
      <Button variant='danger' block name={pokemon.id}>
        Remove {pokemon.wlPoke.name}
      </Button>
    </Row>
  );
}
