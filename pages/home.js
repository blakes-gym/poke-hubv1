import "../styles.scss";
import Table from 'react-bootstrap/Table'
import Template from "../components/Template.js";

export default function Home() {
  return (
    <Template>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Type</th>
            <th>Total</th>
            <th>HP</th>
            <th>Attack</th>
            <th>Defense</th>
            <th>Sp. Atk</th>
            <th>Sp. Def</th>
            <th>Speed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </Template>
  )
}



// <Container>
// <Row>
//   <Col>#</Col>
//   <Col>Name</Col>
//   <Col>Type</Col>
//   <Col>Total</Col>
//   <Col>HP</Col>
//   <Col>Attack</Col>
//   <Col>Defense</Col>
//   <Col>Sp. Atk</Col>
//   <Col>Sp. Def</Col>
//   <Col>Speed</Col>
// </Row>
// </Container>