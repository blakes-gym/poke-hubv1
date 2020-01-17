import {Table, Accordion} from 'react-bootstrap';
import hexData from '../../utils/hexDataDerick';
import Search from './Search.js';
import { MDBDataTable, MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader} from 'mdbreact';
import typeImages from '../../utils/typeImages'
import {FaAngleDown, FaAngleUp} from 'react-icons/fa'
import {useState} from 'react';

export default function Window ({pokemon}) {
  const [arrow, setArrow] = useState(<FaAngleDown style={{float: 'right'}}/>)
  const [show, setShow] = useState(false)

  // const handleShowPokemon = () => (

  // )

  const handleClick = () => (
    setArrow(<FaAngleUp style={{float: 'right'}}/>)
  )

  return (
    <div className="d-none d-sm-block" className="pokeDescription">
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
              {pokemon.map((pokemon, index) => {
                var [show, setShow] = useState(false);
                const handleShow = () => {
                  if (show !== true) {
                    setShow(!show)
                  } 
                }
                return (
                  <tr key={pokemon.id} style={{textAlign: 'center'}} onClick={handleShow}>
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
                    <td colspan="2" style={{width:'10%'}}>{pokemon.total}</td><br></br>

                      <MDBModal isOpen={show}  fullHeight position="right">
                        <MDBModalHeader >{pokemon.name}</MDBModalHeader>
                        <MDBModalBody>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                          consequat.
                        </MDBModalBody>
                        <MDBModalFooter>
                          <MDBBtn color="secondary" onClick={() => setShow(!show)}>Close</MDBBtn>
                        </MDBModalFooter>
                      </MDBModal>
                        
                  </tr>
                )
              })}
            </tbody>
        </Table>
    </div>
  )
}
