import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function statList({ stats }) {
  return (
    <>
      <Row>
        <Col>HP: {stats.HP}</Col>
        <Col>Sp. Atk: {stats['Sp. Atk']}</Col>
      </Row>
      <Row>
        <Col>Atk: {stats.Attack}</Col>
        <Col>Sp. Def: {stats['Sp. Def']}</Col>
      </Row>
      <Row>
        <Col>Def: {stats.Defense}</Col>
        <Col>Speed: {stats.Speed}</Col>
      </Row>
    </>
  );
}
