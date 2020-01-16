import Table from 'react-bootstrap/Table';

export default function TeamMemberData({ pokemon }) {
  return (
    <Table responsive>
      <tbody>
        <tr>
          <td>HP</td>
          <td>{pokemon.hp}</td>
        </tr>
        <tr>
          <td>Attack</td>
          <td>{pokemon.atk}</td>
        </tr>
        <tr>
          <td>Defense</td>
          <td>{pokemon.def}</td>
        </tr>
        <tr>
          <td>Sp. Atk</td>
          <td>{pokemon.spatk}</td>
        </tr>
        <tr>
          <td>Sp. Def</td>
          <td>{pokemon.spdef}</td>
        </tr>
        <tr>
          <td>Speed</td>
          <td>{pokemon.speed}</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>{pokemon.total}</td>
        </tr>
      </tbody>
    </Table>
  );
}
