import {Table} from 'react-bootstrap';
import hexData from '../../utils/hexDataDerick';
import Search from './Search.js';
import { MDBDataTable } from 'mdbreact';
import typeImages from '../../utils/typeImages'
import {FaAngleDown} from 'react-icons/fa'
import {FaAngleUp} from 'react-icons/fa'
import {useState} from 'react';

// export default function Window ({pokemon}) {
//   const data = {
//     columns: [
//     {
//       label: 'Name',
//       field: 'name',
//       sort: 'asc',
//       width: 150
//     },
//     {
//       label: 'Type',
//       field: 'type1',
//       sort: 'asc',
//       width: 150
//     },
//     {
//       label: 'Type',
//       field: 'type2',
//       sort: 'asc',
//       width: 150
//     },
//     {
//       label: 'HP',
//       field: 'hp',
//       sort: 'asc',
//       width: 150
//     },
//     {
//       label: 'Attack',
//       field: 'atk',
//       sort: 'asc',
//       width: 150
//     },
//     {
//       label: 'Defense',
//       field: 'def',
//       sort: 'asc',
//       width: 150
//     },
//     {
//       label: 'SP. Atk',
//       field: 'spatk',
//       sort: 'asc',
//       width: 150
//     },
//     {
//       label: 'SP. Def',
//       field: 'spdef',
//       sort: 'asc',
//       width: 150
//     },
//     {
//       label: 'Speed',
//       field: 'speed',
//       sort: 'asc',
//       width: 150
//     }],
//     rows: pokemon
//   }
//   return (
//     <MDBDataTable
//       bordered
//       hover
//       data={data}
//     />
//   )
// }



export default function Window ({pokemon}) {
  const [arrow, setArrow] = useState(<FaAngleDown style={{float: 'right'}}/>)

  const handleClick = () => (
    setArrow(<FaAngleUp style={{float: 'right'}}/>)
  )

  return (
    <div className="d-none d-sm-block">
      <Search />
        <Table bordered hover>
            <thead className="thead-dark" style={{fontSize: '14px'}}>
              <tr>
                <th onClick={handleClick} style={{borderRightStyle: 'none'}}># </th>
                <th style={{borderLeftStyle:'none', borderRightStyle: 'none'}}>{arrow}</th>
                <th style={{borderRightStyle: 'none'}}>Name </th>
                <th style={{borderLeftStyle:'none', borderRightStyle: 'none'}}>{arrow}</th>
                <th style={{borderRightStyle: 'none'}}>Type </th>
                <th style={{borderLeftStyle:'none', borderRightStyle: 'none'}}>{arrow}</th>
                <th style={{borderRightStyle: 'none'}}>HP </th>
                <th style={{borderLeftStyle:'none', borderRightStyle: 'none'}}>{arrow}</th>
                <th style={{borderRightStyle: 'none'}}>Attack </th>
                <th style={{borderLeftStyle:'none', borderRightStyle: 'none'}}>{arrow}</th>
                <th style={{borderRightStyle: 'none'}}>Defense </th>
                <th style={{borderLeftStyle:'none', borderRightStyle: 'none'}}>{arrow}</th>
                <th style={{borderRightStyle: 'none'}}>Sp. Atk </th>
                <th style={{borderLeftStyle:'none', borderRightStyle: 'none'}}>{arrow}</th>
                <th style={{borderRightStyle: 'none'}}>Sp. Def </th>
                <th style={{borderLeftStyle:'none', borderRightStyle: 'none'}}>{arrow}</th>
                <th style={{borderRightStyle: 'none'}}>Speed </th>
                <th style={{borderLeftStyle:'none', borderRightStyle: 'none'}}>{arrow}</th>
                <th style={{borderRightStyle: 'none'}}>Total </th>
                <th style={{borderLeftStyle:'none', borderRightStyle: 'none'}}>{arrow}</th>
              </tr>
            </thead>
            <tbody >
              {pokemon.map((pokemon, index) => (
                <tr key={pokemon.id} style={{textAlign: 'center'}}>
                  <td style={{width:'5%', borderRightStyle: 'none'}}><img style={{height:'2rem', width: '2rem'}} src={pokemon.icon}></img></td>
                  <td style={{width:'5%', borderLeftStyle:'none', borderRightStyle: 'none'}}>{pokemon.id}</td>
                  <td colspan="2" style={{width:'10%'}}>{pokemon.name}</td>
                  <td colspan="2" style={{width:'10%'}}>
                    { pokemon.type2 ? (
                      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                        <img src={typeImages[pokemon.type1]} style={{width: '30%'}}/>
                        <img src={typeImages[pokemon.type2]} style={{width: '30%'}}/>
                      </div>
                    ) : (
                      <img src={typeImages[pokemon.type1]} style={{width: '30%'}}/>
                    )}
                  </td>
                  <td colspan="2" style={{width:'10%'}}>{pokemon.hp}</td>
                  <td colspan="2" style={{width:'10%'}}>{pokemon.atk}</td>
                  <td colspan="2" style={{width:'10%'}}>{pokemon.def}</td>
                  <td colspan="2" style={{width:'10%'}}>{pokemon.spatk}</td>
                  <td colspan="2" style={{width:'10%'}}>{pokemon.spdef}</td>
                  <td colspan="2" style={{width:'10%'}}>{pokemon.speed}</td>
                  <td colspan="2" style={{width:'10%'}}>{pokemon.total}</td>
                  {/* <td style={{width:'5%'}}>Moves</td> */}
                </tr>
              ))}
            </tbody>
        </Table>
    </div>
  )
}