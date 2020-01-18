import Table from 'react-bootstrap/Table';

export default function TeamMemberData({ pokemon }) {
  return (
    <Table responsive>
      <tbody>
        <tr>
          <td>HP</td>
          <td>{pokemon.hp}</td>
          <td>Sp.Atk</td>
          <td>{pokemon.spatk}</td>
        </tr>
        <tr>
          <td>Atk</td>
          <td>{pokemon.atk}</td>
          <td>Sp.Def</td>
          <td>{pokemon.spdef}</td>
        </tr>
        <tr>
          <td>Def</td>
          <td>{pokemon.def}</td>
          <td>Spd</td>
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
