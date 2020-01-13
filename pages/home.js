import "../styles.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
  return (
  <Container>
    <Row>
      <Col>#</Col>
      <Col>Name</Col>
      <Col>Type</Col>
      <Col>Total</Col>
      <Col>HP</Col>
      <Col>Attack</Col>
      <Col>Defense</Col>
      <Col>Sp. Atk</Col>
      <Col>Sp. Def</Col>
      <Col>Speed</Col>
    </Row>
  </Container>
  )
}


