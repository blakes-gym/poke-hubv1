import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function statList({ stats }) {
  return (
    <Row>
      <Col>
        <ListGroup>
          <ListGroup.Item>HP: {stats.HP}</ListGroup.Item>
          <ListGroup.Item>Atk: {stats.Attack}</ListGroup.Item>
          <ListGroup.Item>Def: {stats.Defense}</ListGroup.Item>
        </ListGroup>
      </Col>
      <Col>
        <ListGroup>
          <ListGroup.Item>Sp. Atk: {stats['Sp. Atk']}</ListGroup.Item>
          <ListGroup.Item>Sp. Def: {stats['Sp. Def']}</ListGroup.Item>
          <ListGroup.Item>Speed: {stats.Speed}</ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  );
}
