import Table from 'react-bootstrap/Table';
import Data from '../../data/dummyData.js';
import hexData from '../../hexData';

export default function Window () {
  return (
    <Table className="d-none d-sm-block" bordered hover>
      <thead className="thead-dark">
        <tr>
          <th style={{borderRightStyle: 'none'}}>#</th>
          <th style={{borderLeftStyle:'none', borderRightStyle: 'none'}}></th>
          <th>Name</th>
          <th>Type</th>
          <th>HP</th>
          <th>Attack</th>
          <th>Defense</th>
          <th>Sp. Atk</th>
          <th>Sp. Def</th>
          <th>Speed</th>
          <th>Total</th>
          <th>Moves</th>
        </tr>
      </thead>
      <tbody>
        {Data.map((pokemon, index) => (
          <tr key={pokemon.DexNo}>
            <td style={{width:'5%', borderRightStyle: 'none'}}><img style={{width:'40px', height:'5%'}} src={pokemon.Sprite}></img></td>
            <td style={{width:'5%', borderLeftStyle:'none', borderRightStyle: 'none'}}>{pokemon.DexNo}</td>
            <td style={{width:'10%'}}>{pokemon.Name}</td>
            <td style={{width:'10%'}}>{pokemon.Type.map((type, index) => (<div key={`${pokemon.DexNo} ${type}`} style={{backgroundColor: hexData[type], color:'white', textAlign: 'center'}}>{type}</div>))}</td>
            <td style={{width:'10%'}}>{pokemon.Stats.HP}</td>
            <td style={{width:'10%'}}>{pokemon.Stats.Attack}</td>
            <td style={{width:'10%'}}>{pokemon.Stats.Defense}</td>
            <td style={{width:'10%'}}>{pokemon.Stats['Sp. Atk']}</td>
            <td style={{width:'10%'}}>{pokemon.Stats['Sp. Def']}</td>
            <td style={{width:'10%'}}>{pokemon.Stats.Speed}</td>
            <td style={{width:'10%'}}>{pokemon.Stats.Total}</td>
            <td style={{width:'5%'}}>Moves</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}