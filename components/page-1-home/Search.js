import React from "react";
import { MDBCol, MDBFormInline } from "mdbreact";
import {FaSearch, FaFilter} from 'react-icons/fa';
import {Form, Dropdown, Accordion, Button} from 'react-bootstrap';
import {useState} from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import chroma from 'react-select';
import { MDBInput } from 'mdbreact';
import Toggle from 'react-toggle';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBContainer, MDBHamburgerToggler, MDBNavbarToggler} from 'mdbreact';
// import {Typeahead} from 'react-bootstrap-typeahead';

export default function Search () {
  const [collapse1, setCollapse1] = useState(false)
  const [collapse2, setCollapse2] = useState(false)

  const animatedComponents1 = makeAnimated()
  const animatedComponents2 = makeAnimated()
  const category = [{label:'Normal', value: 'normal', color:'#A8A77A'}, {label: 'Fire', value: 'fire', color:'#EE8130'}, {label: 'Water', value: 'water', color:'#F7D02C'}, {label:'Electric', value: 'electric', color: '#F7D02C'}, {label: 'Grass', value: 'grass', color: '#7AC74C'}, {label: 'Ice', value: 'ice', color: '#96D9D6'}, {label:'Fighting', value: 'fighting', color: '#C22E28'}, {label:'Poison', value: 'poison', color: '#A33EA1'}, {label:'Ground', value: 'ground', color: '#E2BF65'}, {label:'Flying', value: 'flying', color: '#A98FF3'}, {label: 'Psychic', value: 'psychic', color: '#F95587'}, {label:'Bug', value: 'bug', color: '#A6B91A'}, {label:'Rock', value: 'rock', color: '#B6A136'}, {label: 'Ghost', value: 'ghost', color: '#735797'}, {label:'Dragon', value: 'dragon', color: '#6F35FC'}, {label: 'Dark', value: 'dark', color: '#705746'}, {label: 'Steel', value: 'steel', color: '#B7B7CE'}, {label: 'Fairy', value: 'fairy', color: '#D685AD'}];
  // const category = [{label:'Normal', value: 'normal', color:'#A8A77A'}, {label: 'Fire', value: 'fire', color:'#EE8130'}, {label: 'Water', value: 'water', color:'#F7D02C'}, {label:'Electric', value: 'electric', color: '#F7D02C'}, {label: 'Grass', value: 'grass', color: '#7AC74C'}, {label: 'Ice', value: 'ice', color: '#96D9D6'}, {label:'Fighting', value: 'fighting', color: '#C22E28'}, {label:'Poison', value: 'poison', color: '#A33EA1'}, {label:'Ground', value: 'ground', color: '#E2BF65'}, {label:'Flying', value: 'flying', color: '#A98FF3'}, {label: 'Psychic', value: 'psychic', color: '#F95587'}, {label:'Bug', value: 'bug', color: '#A6B91A'}, {label:'Rock', value: 'rock', color: '#B6A136'}, {label: 'Ghost', value: 'ghost', color: '#735797'}, {label:'Dragon', value: 'dragon', color: '#6F35FC'}, {label: 'Dark', value: 'dark', color: '#705746'}, {label: 'Steel', value: 'steel', color: '#B7B7CE'}, {label: 'Fairy', value: 'fairy', color: '#D685AD'}];
  // const category = [{label:'Normal', color:'#A8A77A'}, {label: 'Fire', value: 'fire', color:'#EE8130'}, {label: 'Water', value: 'water', color:'#F7D02C'}, {label:'Electric', value: 'electric', color: '#F7D02C'}, {label: 'Grass', value: 'grass', color: '#7AC74C'}, {label: 'Ice', value: 'ice', color: '#96D9D6'}, {label:'Fighting', value: 'fighting', color: '#C22E28'}, {label:'Poison', value: 'poison', color: '#A33EA1'}, {label:'Ground', value: 'ground', color: '#E2BF65'}, {label:'Flying', value: 'flying', color: '#A98FF3'}, {label: 'Psychic', value: 'psychic', color: '#F95587'}, {label:'Bug', value: 'bug', color: '#A6B91A'}, {label:'Rock', value: 'rock', color: '#B6A136'}, {label: 'Ghost', value: 'ghost', color: '#735797'}, {label:'Dragon', value: 'dragon', color: '#6F35FC'}, {label: 'Dark', value: 'dark', color: '#705746'}, {label: 'Steel', value: 'steel', color: '#B7B7CE'}, {label: 'Fairy', value: 'fairy', color: '#D685AD'}];

  const [toggle, setToggle] = useState(false);

  return (
    <MDBContainer style={{display: 'flex', flexDirection: 'row' }}>
      <MDBNavbar color="amber lighten-4" style={{marginTop: '20px'}} light>
        <MDBContainer>
          <MDBNavbarBrand style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
            
            <MDBFormInline className="md-form mb-4" style={{width: '515px', marginLeft: '-10%'}}>
              <div style={{width: '24rem', marginLeft:'3rem', marginTop: 10, display:'inline'}}>
                <input className="form-control ml-3 w-75" placeholder="Enter email">
                  <FaFilter/>
                  {/* <Typeahead id="Hello" labelKey="label" options={category} placeholder="Select Category"/> */}
                </input> 
                  <Button variant="dark" style={{marginLeft: '5px'}}>Filter</Button>  
              </div>
            </MDBFormInline>

            <MDBFormInline className="md-form mb-4" style={{width: '515px', marginLeft: '-5%'}}>
              <MDBHamburgerToggler color="#007bff" id="hamburger1" onClick={()=> setCollapse1(!collapse1)} />
                 <input className="form-control form-control-med ml-3 w-75 border border-primary text-dark" type="text" placeholder="Enter PokeName" aria-label="Search" />
                 <Button variant="primary" style={{marginLeft: '5px'}}>Search</Button>                     

                   <MDBCollapse isOpen={collapse1} navbar>
                     <MDBNavbarNav center="true" style={{display: 'flex', justifyContent: 'space-evenly'}}>
                       <MDBNavItem style={{width: '24rem', marginLeft:'3rem', marginTop: 10}}>
                          <Select components={animatedComponents1} options={category} placeholder="Select Type" isMulti="true"/>
                      </MDBNavItem>
                     </MDBNavbarNav>
                   </MDBCollapse>
              </MDBFormInline>


            </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </MDBContainer>

                          //       {/* <div className="toggle-switch">
                          //   <input
                          //     type="checkbox"
                          //     className="toggle-switch-checkbox"
                          //     Text={['YES', 'No']}
                          //     name={'toggleSwitch'}
                          //     id={'toggleSwitch'}
                          //   />

                          //   <label className="toggle-switch-label" htmlFor={'toggleSwitch'}>
                          //     <span className="toggle-switch-inner" />
                          //     <span className="toggle-switch-switch" />
                          //   </label>
                          // </div>          */}



  );
}