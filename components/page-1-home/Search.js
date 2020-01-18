import React from "react";
import { MDBCol, MDBFormInline } from "mdbreact";
import {FaSearch} from 'react-icons/fa';
import {Form, Dropdown, Accordion, Button} from 'react-bootstrap';
import {useState} from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import chroma from 'react-select';

import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBContainer, MDBHamburgerToggler } from 'mdbreact';

export default function Search () {
  const [collapse, setCollapse] = useState(false)
  const animatedComponents = makeAnimated()

  const colorOptions = [{label:'Normal', value: 'normal', color:'#A8A77A'}, {label: 'Fire', value: 'fire', color:'#EE8130'}, {label: 'Water', value: 'water', color:'#F7D02C'}, {label:'Electric', value: 'electric', color: '#F7D02C'}, {label: 'Grass', value: 'grass', color: '#7AC74C'}, {label: 'Ice', value: 'ice', color: '#96D9D6'}, {label:'Fighting', value: 'fighting', color: '#C22E28'}, {label:'Poison', value: 'poison', color: '#A33EA1'}, {label:'Ground', value: 'ground', color: '#E2BF65'}, {label:'Flying', value: 'flying', color: '#A98FF3'}, {label: 'Psychic', value: 'psychic', color: '#F95587'}, {label:'Bug', value: 'bug', color: '#A6B91A'}, {label:'Rock', value: 'rock', color: '#B6A136'}, {label: 'Ghost', value: 'ghost', color: '#735797'}, {label:'Dragon', value: 'dragon', color: '#6F35FC'}, {label: 'Dark', value: 'dark', color: '#705746'}, {label: 'Steel', value: 'steel', color: '#B7B7CE'}, {label: 'Fairy', value: 'fairy', color: '#D685AD'}];

  return (
    <MDBContainer>
      <MDBNavbar color="amber lighten-4" style={{marginTop: '20px'}} light>
        <MDBContainer>
          <MDBNavbarBrand style={{width: '100%', display: 'flex'}}>
            <MDBFormInline className="md-form mb-4" style={{width: '515px', marginLeft: '-5%'}}>
              {/* <FaSearch icon="search" /><input className="form-control form-control-sm ml-3 w-75" style={{width:'100%'}} type="text" placeholder="Enter PokeName" aria-label="Search" /> */}
              <MDBHamburgerToggler color="#007bff" id="hamburger1" onClick={()=> setCollapse(!collapse)} />
                 <input className="form-control form-control-med ml-3 w-75 border border-primary text-dark" type="text" placeholder="Enter PokeName" aria-label="Search" />
                   <MDBCollapse isOpen={collapse} navbar>
                     <MDBNavbarNav center="true" style={{display: 'flex', justifyContent: 'space-evenly'}}>
                       <MDBNavItem style={{width: '24rem', marginLeft:'3rem', marginTop: 10}}>
                          <Select components={animatedComponents} options={colorOptions} placeholder="Select Type" isMulti="true"/>                     
                      </MDBNavItem>
                     </MDBNavbarNav>
                   </MDBCollapse>
              </MDBFormInline>
            </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </MDBContainer>
  );
}