import {Table} from 'react-bootstrap';
import hexData from '../../utils/hexDataDerick';
import Search from './Search.js';


export default function Window ({pokemon}) {
  return (
    <div className="d-none d-sm-block">
      <Search />
        <Table bordered hover>
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
              {pokemon.map((pokemon, index) => (
                <tr key={pokemon.id}>
                  <td style={{width:'5%', borderRightStyle: 'none'}}><img style={{height:'2rem', width: '2rem'}} src={pokemon.icon}></img></td>
                  <td style={{width:'5%', borderLeftStyle:'none', borderRightStyle: 'none'}}>{pokemon.id}</td>
                  <td style={{width:'10%'}}>{pokemon.name}</td>
                  <td style={{width:'10%'}}>
                    { pokemon.type2 ? (
                      <div>
                        <div key={pokemon.id} style={{backgroundColor: hexData[pokemon.type1], color:'white', textAlign: 'center'}}>{pokemon.type1}</div>
                        <div key={pokemon.id} style={{backgroundColor: hexData[pokemon.type2], color:'white', textAlign: 'center'}}>{pokemon.type2}</div>
                      </div>
                    ) : (
                      <div key={`${pokemon.id} ${pokemon.type1}`} style={{backgroundColor: hexData[pokemon.type1], color:'white', textAlign: 'center'}}>{pokemon.type1}</div>
                    )}
                  </td>
                  <td style={{width:'10%'}}>{pokemon.hp}</td>
                  <td style={{width:'10%'}}>{pokemon.atk}</td>
                  <td style={{width:'10%'}}>{pokemon.def}</td>
                  <td style={{width:'10%'}}>{pokemon.spatk}</td>
                  <td style={{width:'10%'}}>{pokemon.spdef}</td>
                  <td style={{width:'10%'}}>{pokemon.speed}</td>
                  <td style={{width:'10%'}}>{pokemon.total}</td>
                  <td style={{width:'5%'}}>Moves</td>
                </tr>
              ))}
            </tbody>
        </Table>
    </div>
  )
}