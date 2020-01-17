import {Table, Accordion} from 'react-bootstrap';
import hexData from '../../utils/hexDataDerick';
import Search from './Search.js';
import { MDBDataTable, MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader, MDBCol, MDBRow} from 'mdbreact';
import typeImages from '../../utils/typeImages';
import {FaAngleDown, FaAngleUp} from 'react-icons/fa';
import {useState} from 'react';
import StatsChart from './StatsChart.js';



export default function Window ({pokemon}) {
  const [arrow, setArrow] = useState(<FaAngleDown style={{float: 'right'}}/>)
  const [show, setShow] = useState(false)

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
              <th style={{borderLeftStyle:'none'}}>{arrow}</th>
              <th style={{borderRightStyle: 'none'}}>Name </th>
              <th style={{borderLeftStyle:'none'}}>{arrow}</th>
              <th style={{borderRightStyle: 'none'}}>Type </th>
              <th style={{borderLeftStyle:'none'}}>{arrow}</th>
              <th style={{borderRightStyle: 'none'}}>HP </th>
              <th style={{borderLeftStyle:'none'}}>{arrow}</th>
              <th style={{borderRightStyle: 'none'}}>Attack </th>
              <th style={{borderLeftStyle:'none'}}>{arrow}</th>
              <th style={{borderRightStyle: 'none'}}>Defense </th>
              <th style={{borderLeftStyle:'none'}}>{arrow}</th>
              <th style={{borderRightStyle: 'none'}}>Sp. Atk </th>
              <th style={{borderLeftStyle:'none'}}>{arrow}</th>
              <th style={{borderRightStyle: 'none'}}>Sp. Def </th>
              <th style={{borderLeftStyle:'none'}}>{arrow}</th>
              <th style={{borderRightStyle: 'none'}}>Speed </th>
              <th style={{borderLeftStyle:'none'}}>{arrow}</th>
              <th style={{borderRightStyle: 'none'}}>Total </th>
              <th style={{borderLeftStyle:'none'}}>{arrow}</th>
            </tr>
          </thead>
          <tbody >
            {pokemon.map((pokemon, index) => {
              var [show, setShow] = useState(false);
              var stats = [{value: 'HP', stat: pokemon.hp}, {value: 'Attack', stat: pokemon.atk}, {value: 'Defense', stat: pokemon.def}, {value: 'Sp. Atk', stat: pokemon.spatk}, {value: 'Sp. Def', stat: pokemon.spdef}, {value: 'Speed', stat: pokemon.speed}]
              const handleShow = () => {
                if (show !== true) {
                  setShow(!show)
                } 
              }
              return (
                <tr key={pokemon.id} style={{textAlign: 'center'}} onClick={handleShow}>
                  <td style={{width:'5%', borderLeftStyle:'none', borderRightStyle: 'none'}}>{pokemon.id}</td>
                  <td style={{width:'5%', borderLeftStyle:'none', borderRightStyle: 'none'}}><img style={{height:'2rem', width: '2rem'}} src={pokemon.icon}></img></td>
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
                  <MDBModal isOpen={show} fullHeight="true">
                      <MDBModalHeader style={{justifyContent: 'center'}}>
                        <div style={{display:"flex", justifyItems: 'center', alignItems: 'center'}}>
                          <img src={pokemon.sprite} style={{width: '20%', flex: 1}} />
                          <div className="pokeNameWindow" style={{flex: 4}}>{pokemon.name}</div>
                          <div style={{flex: 1}}>{pokemon.id}</div>
                        </div>
                        </MDBModalHeader>
                      <MDBModalBody style={{display: 'flex'}}>
                        <StatsChart stats={stats} />
                        <MDBContainer style={{textAlign: 'left', marginTop: '0%'}}>
                          {stats.map((stat, index) => (
                            <MDBRow className="modalRow">
                              <MDBCol md="7">{stat.value}</MDBCol>
                              <MDBCol md="4">{stat.stat}</MDBCol>
                            </MDBRow>
                          ))}
                            <MDBRow className="modalRow">
                              <MDBCol md="7">Total</MDBCol>
                              <MDBCol md="4">{pokemon.total}</MDBCol>
                            </MDBRow>
                        </MDBContainer>
                      </MDBModalBody>
                      <MDBModalFooter>
                        <MDBBtn color="secondary" style={{left: '-50%'}} onClick={() => setShow(!show)}>Close</MDBBtn>
                        <MDBBtn color="danger">Remove</MDBBtn>
                        <MDBBtn color="success">Add</MDBBtn>
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
