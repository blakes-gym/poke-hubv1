import { MDBDataTable, MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader, MDBCol, MDBRow} from 'mdbreact';
import StatsChart from './StatsChart.js';
import axios from 'axios';
import {server} from '../../constants/index.js';


export default function Modal ({show, stats, pokemon, setShow}) {

  const handleAdd = () => {
    axios    
    .post('/wishlist', pokemon)
    .then(data => console.log(data))
    .catch(err => console.log('err in PUT', err));
  }

  const handleDelete = () => {
    axios
    .delete(`/wishlist/${pokemon.id}`)
    .then(() => console.log('delete successful'))
    .catch((err) => console.log('delete unsuccessful', err))
  }
  
  return (
    <MDBModal isOpen={show} fullHeight="true">
      <MDBModalHeader >
        <div style={{display:"flex", justifyContent: 'space-evenly', alignItems: 'center'}}>
          <img src={pokemon.sprite} style={{width: '20%'}} />
          <div className="pokeNameWindow" >{pokemon.name}</div>
          <div >#{pokemon.id}</div>
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
        <MDBBtn color="danger" onClick={handleDelete}>Remove</MDBBtn>
        <MDBBtn color="success" onClick={handleAdd}>Add</MDBBtn>
      </MDBModalFooter>
    </MDBModal>
  )
}