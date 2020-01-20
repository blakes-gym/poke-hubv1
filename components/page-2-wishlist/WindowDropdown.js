import StatsGraph from './StatsGraph.js';
import Moves from './Moves.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function WindowDropdown({ pokemon }) {
  return (
    <Row>
      <Col>
        <StatsGraph pokemon={pokemon} />
      </Col>
      <Col>
        <Moves />
      </Col>
    </Row>
  );
}
