import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBModalHeader,
  MDBCol,
  MDBRow
} from 'mdbreact'
import StatsChart from './StatsChart.js'
import axios from 'axios'

export default function Modal({ show, stats, pokemon, setShow }) {
  const local = 'https://poke-hub-backend.herokuapp.com/api'

  const handleAdd = () => {
    axios
      .post(local + '/wishlist', { wlPokeId: pokemon.id })
      .then(data => console.log('success'))
      .catch(err => console.log('err in post'))
    setShow(!show)
    alert(`${pokemon.name} has been added to you wishlist!`)
  }

  return (
    <MDBModal isOpen={show} fullHeight="true">
      <MDBModalHeader>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}
        >
          <img src={pokemon.sprite} style={{ width: '20%' }} />
          <div className="pokeNameWindow">{pokemon.name}</div>
          <div>#{pokemon.id}</div>
        </div>
      </MDBModalHeader>
      <MDBModalBody style={{ display: 'flex' }}>
        <StatsChart stats={stats} type={pokemon.type1} />
        <MDBContainer style={{ textAlign: 'left', marginTop: '0%' }}>
          {stats.map((stat, index) => (
            <MDBRow key={index} className="modalRow">
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
        <MDBBtn
          color="secondary"
          style={{ right: '70%' }}
          onClick={() => setShow(!show)}
        >
          Close
        </MDBBtn>
        <MDBBtn color="success" onClick={handleAdd}>
          Add
        </MDBBtn>
      </MDBModalFooter>
    </MDBModal>
  )
}
