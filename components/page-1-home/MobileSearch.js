import { MDBDataTable, MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader, MDBCol, MDBRow, MDBFormInline, MDBNavItem} from 'mdbreact';
import {Form, Dropdown, Accordion, Button} from 'react-bootstrap';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import {FaSearch, FaFilter} from 'react-icons/fa';
import {Typeahead} from 'react-bootstrap-typeahead';
const filter = ['ID', 'Name', 'Type', 'HP', 'Attack', 'Defense', 'SpAtk', 'SpDef', 'Speed', 'Total'];

const animatedComponents1 = makeAnimated()
const category = [{label:'Normal', value: 'normal', color:'#A8A77A'}, {label: 'Fire', value: 'fire', color:'#EE8130'}, {label: 'Water', value: 'water', color:'#F7D02C'}, {label:'Electric', value: 'electric', color: '#F7D02C'}, {label: 'Grass', value: 'grass', color: '#7AC74C'}, {label: 'Ice', value: 'ice', color: '#96D9D6'}, {label:'Fighting', value: 'fighting', color: '#C22E28'}, {label:'Poison', value: 'poison', color: '#A33EA1'}, {label:'Ground', value: 'ground', color: '#E2BF65'}, {label:'Flying', value: 'flying', color: '#A98FF3'}, {label: 'Psychic', value: 'psychic', color: '#F95587'}, {label:'Bug', value: 'bug', color: '#A6B91A'}, {label:'Rock', value: 'rock', color: '#B6A136'}, {label: 'Ghost', value: 'ghost', color: '#735797'}, {label:'Dragon', value: 'dragon', color: '#6F35FC'}, {label: 'Dark', value: 'dark', color: '#705746'}, {label: 'Steel', value: 'steel', color: '#B7B7CE'}, {label: 'Fairy', value: 'fairy', color: '#D685AD'}];



export default function MobileSearch ({show, compareValues, setCategory}) {
  
  return (
  <div>
     <MDBModal isOpen={show} fullHeight="true">
        <MDBModalHeader >
          <div className="pokeNameWindow" style={{display:"flex", justifyContent: 'space-evenly', alignItems: 'center'}}>
           Search BY
          </div>
        </MDBModalHeader>
        <MDBModalBody style={{display: 'flex', width: '100%'}}>
          <MDBContainer style={{marginTop: '0%'}}>
          <MDBFormInline className="md-form mb-4" style={{width: '100%', marginLeft: '-5%'}}>
            <input className="form-control form-control-med ml-3 w-75 border border-primary text-dark" type="text" placeholder="Enter PokeName" aria-label="Search" />
            <MDBNavItem style={{width: '75%', marginLeft:'1rem', marginTop: 10, display: 'inline-block'}}>
                {/* <Button variant="primary" style={{marginLeft: '5px', float: 'right', width:"5rem"}}>Filter </Button>    */}
              <Select components={animatedComponents1} options={category} placeholder="Select Type" isMulti="true"/>
            </MDBNavItem>
          </MDBFormInline>
          </MDBContainer>
        </MDBModalBody>

        <MDBModalFooter style={{borderBottom: '1px solid black'}}>
        <Button variant="primary" style={{marginLeft: '5px'}}>Search</Button>   
        </MDBModalFooter>

        <MDBModalHeader >
          <div className="pokeNameWindow" style={{display:"flex", justifyContent: 'space-evenly', alignItems: 'center'}}>Filter BY</div>
        </MDBModalHeader>

        <MDBModalBody style={{display: 'flex', width: '100%'}}>
        <MDBContainer style={{marginTop: '0%'}}>

        <MDBFormInline className="md-form mb-4" style={{width: '360px', position: 'relative'}}>
              <div style={{width: '20rem', marginLeft:'-1rem', marginTop: 10, display:'inline'}}>
                <div className="form-control ml-3 w-75">
                  <FaFilter/>
                  <div style={{position: 'relative', bottom: '1.95rem', left: '1.7rem'}}>
                    <Typeahead id="filter" labelKey="label" options={filter} placeholder="Select Category" onInputChange={(e) => {
                      setInput(e.toLowerCase())
                    }}/>
                  </div>
                </div> 
              </div>

            </MDBFormInline>
            </MDBContainer>

        </MDBModalBody>

        <MDBModalFooter style={{borderBottom: '1px solid black'}}>
        <Button variant="dark" style={{marginLeft: '0px', float: 'right', display: 'relative'}} onClick={() => setCategory({input: filter1[categoryInput], direction: toggleFilter})}>Filter</Button> 

        </MDBModalFooter>
      </MDBModal>
  </div>
  )
}