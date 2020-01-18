import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function PokemonStats({ pokemon }) {
  return (
    <Table
      responsive
      className='mt-auto mb-auto'
      style={{ fontSize: '0.8rem' }}
    >
      <tbody>
        <tr>
          <th className='HPcolor'>HP</th>
          <td className='HPcolor'>{pokemon.hp}</td>
          <th className='SpAttackcolor'>SP. ATK</th>
          <td className='SpAttackcolor'>{pokemon.spatk}</td>
        </tr>
        <tr>
          <th className='Attackcolor'>ATK</th>
          <td className='Attackcolor'>{pokemon.atk}</td>
          <th className='SpDefensecolor'>SP. DEF</th>
          <td className='SpDefensecolor'>{pokemon.spdef}</td>
        </tr>
        <tr>
          <th className='Defensecolor'>DEF</th>
          <td className='Defensecolor'>{pokemon.def}</td>
          <th className='Speedcolor'>SPEED</th>
          <td className='Speedcolor'>{pokemon.speed}</td>
        </tr>
        <tr>
          <th className='Totalcolor'>TOTAL</th>
          <td className='Totalcolor'>
            <b>{pokemon.total}</b>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
