
import { MDBDataTable, MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader, MDBCol, MDBRow} from 'mdbreact';
import StatsChart from './StatsChart.js';


export default function Modal ({show, stats, pokemon, setShow}) {
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
          <MDBBtn color="danger">Remove</MDBBtn>
          <MDBBtn color="success">Add</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    )
}