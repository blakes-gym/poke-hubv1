import {Table, Accordion} from 'react-bootstrap';
import hexData from '../../utils/hexDataDerick';
import Search from './Search.js';
import { MDBDataTable, MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader, MDBCol, MDBRow} from 'mdbreact';
import typeImages from '../../utils/typeImages';
import {FaAngleDown, FaAngleUp} from 'react-icons/fa';
import {useState, useRef} from 'react';
import Modal from './Modal.js';



export default function Window ({pokemon}) {
  const [arrow, setArrow] = useState({'#': true, 'Name': true,'Type': true,'HP': true,'Attack': true,'Defense': true,'Sp. Atk': true,'Sp. Def': true,'Speed': true,'Total': true})
  const [show, setShow] = useState(false)
  const [info, setInfo] = useState('')


  // const toggle = arrow ? (<FaAngleUp style={{float: 'right', cursor: 'pointer'}}/>) : (<FaAngleDown style={{float: 'right', cursor: 'pointer'}}/>)

  const toggle = {
    true: <FaAngleUp style={{float: 'right', cursor: 'pointer'}}/>,
    false: <FaAngleDown style={{float: 'right', cursor: 'pointer'}}/>
  }


  const handleClick = (e) => {
    setArrow({
      ...arrow,
      [e.currentTarget.getAttribute('name')] : !arrow[e.currentTarget.getAttribute('name')]
    })
  }


  const handleShow = (pokemon, stats) => {
    setInfo({
      pokemon,
      stats
    });
    if (show !== true) {
      setShow(!show)
    } 
  }


  // const sortingFunctions = (key, order = 'asc') => {

  //   const varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
  //   const varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];
  //   let comparison = 0;
  //   if (varA > varB) {
  //     comparison = 1;
  //   } else if (varA < varB) {
  //     comparison = -1;
  //   }
  //   return (
  //     (order === 'desc') ? (comparison * -1) : comparison
  //   )
  // }
    // let varA = a[key]
    // let varB = a[key]


    // if (typeof pokemon[key] === 'number') {
    //   if (order === 'asc') {
    //     pokemon.sort(function(a, b){return a-b})
    //   } else {
    //     pokemon.sort(function(a, b){return b-a})
    //   }
    // } else {
    //   if (order === 'asc') {
    //     pokemon.sort( )
    //   }
    // }

  return (
    <div className="d-none d-sm-block overflowY">
      <Search />
      <Table bordered hover style={{cursor: 'pointer'}}>
          <thead className="thead-dark" style={{fontSize: '14px', cursor: 'default'}}>
            <tr>
              <th style={{borderRightStyle: 'none'}}>#</th>
              <th style={{borderLeftStyle: 'none'}}></th>
              <th>Name</th>
              <th>Type</th>
              <th>HP</th>
              <th>Attack</th>
              <th>Defense</th>
              <th>Sp. Atk</th>
              <th>Sp. Def</th>
              <th>Speed</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody >
            {pokemon.map((pokemon, index) => {
              return (
                <tr key={pokemon.id} style={{textAlign: 'center'}} onClick={() => handleShow(pokemon, [{value: 'HP', stat: pokemon.hp}, {value: 'Attack', stat: pokemon.atk}, {value: 'Defense', stat: pokemon.def}, {value: 'Sp. Atk', stat: pokemon.spatk}, {value: 'Sp. Def', stat: pokemon.spdef}, {value: 'Speed', stat: pokemon.speed}])}>
                  <td style={{width:'5%', borderLeftStyle:'none', borderRightStyle: 'none'}}>{pokemon.id}</td>
                  <td style={{width:'5%', borderLeftStyle:'none', borderRightStyle: 'none'}}><img style={{height:'2rem', width: '2rem'}} src={pokemon.icon}></img></td>
                  <td style={{width:'10%'}}>{pokemon.name}</td>
                  <td style={{width:'10%'}}>
                    { pokemon.type2 ? (
                      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                        <img src={typeImages[pokemon.type1]} style={{width: '30%'}}/>
                        <img src={typeImages[pokemon.type2]} style={{width: '30%'}}/>
                      </div>
                    ) : (
                      <img src={typeImages[pokemon.type1]} style={{width: '30%'}}/>
                    )}
                  </td>
                  <td style={{width:'10%'}}>{pokemon.hp}</td>
                  <td style={{width:'10%'}}>{pokemon.atk}</td>
                  <td style={{width:'10%'}}>{pokemon.def}</td>
                  <td style={{width:'10%'}}>{pokemon.spatk}</td>
                  <td style={{width:'10%'}}>{pokemon.spdef}</td>
                  <td style={{width:'10%'}}>{pokemon.speed}</td>
                  <td style={{width:'10%'}}>{pokemon.total}</td>
                </tr>
              )
            })}
          </tbody>
      </Table>
      {show ? (
        <Modal show={show} stats={info.stats} pokemon={info.pokemon} setShow={setShow}/>
      ) : null}
    </div>
  )
}
