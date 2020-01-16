import Table from 'react-bootstrap/Table';

export default function TeamMemberData({ pokemon }) {
  return (
    <Table responsive>
      <tbody>
        <tr>
          <td>HP</td>
          <td>{pokemon.stats.hp}</td>
        </tr>
        <tr>
          <td>Attack</td>
          <td>{pokemon.stats.attack}</td>
        </tr>
        <tr>
          <td>Defense</td>
          <td>{pokemon.stats.defense}</td>
        </tr>
        <tr>
          <td>Sp. Atk</td>
          <td>{pokemon.stats.spAtk}</td>
        </tr>
        <tr>
          <td>Sp. Def</td>
          <td>{pokemon.stats.spDef}</td>
        </tr>
        <tr>
          <td>Speed</td>
          <td>{pokemon.stats.speed}</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>{pokemon.stats.total}</td>
        </tr>
      </tbody>
    </Table>
  );
}
