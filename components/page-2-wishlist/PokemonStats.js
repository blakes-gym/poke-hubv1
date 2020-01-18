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
          <td className='HPcolor'>{pokemon.stats.hp}</td>
          <th className='SpAttackcolor'>SP. ATK</th>
          <td className='SpAttackcolor'>{pokemon.stats.spatk}</td>
        </tr>
        <tr>
          <th className='Attackcolor'>ATK</th>
          <td className='Attackcolor'>{pokemon.stats.atk}</td>
          <th className='SpDefensecolor'>SP. DEF</th>
          <td className='SpDefensecolor'>{pokemon.stats.spdef}</td>
        </tr>
        <tr>
          <th className='Defensecolor'>DEF</th>
          <td className='Defensecolor'>{pokemon.stats.def}</td>
          <th className='Speedcolor'>SPEED</th>
          <td className='Speedcolor'>{pokemon.stats.speed}</td>
        </tr>
        <tr>
          <th className='Totalcolor'>TOTAL</th>
          <td className='Totalcolor'>
            <b>{pokemon.stats.total}</b>
          </td>
        </tr>
      </tbody>
      {/* <table style={{ fontSize: '0.8rem', margin: '5px' }}></table> */}
    </Table>
    // <Table responsive>
    //   <tbody>
    //     <tr>
    //       <td>HP</td>
    //       <td>{pokemon.hp}</td>
    //       <td>Sp.Atk</td>
    //       <td>{pokemon.spatk}</td>
    //     </tr>
    //     <tr>
    //       <td>Atk</td>
    //       <td>{pokemon.atk}</td>
    //       <td>Sp.Def</td>
    //       <td>{pokemon.spdef}</td>
    //     </tr>
    //     <tr>
    //       <td>Def</td>
    //       <td>{pokemon.def}</td>
    //       <td>Spd</td>
    //       <td>{pokemon.speed}</td>
    //     </tr>
    //     <tr>
    //       <td>Total</td>
    //       <td>{pokemon.total}</td>
    //     </tr>
    //   </tbody>
    // </Table>
  );
}
