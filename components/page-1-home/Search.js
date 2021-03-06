import React from "react";
import {MDBFormInline } from "mdbreact";
import {FaFilter} from 'react-icons/fa';
import {Button} from 'react-bootstrap';
import {useState} from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBContainer, MDBHamburgerToggler, MDBNavbarToggler} from 'mdbreact';
import {Typeahead} from 'react-bootstrap-typeahead';

export default function Search ({setCategory, handleSearch, update}) {
  const [collapse1, setCollapse1] = useState(false)

  const animatedComponents1 = makeAnimated()
  const category = [{label:'Normal', value: 'normal', color:'#A8A77A'}, {label: 'Fire', value: 'fire', color:'#EE8130'}, {label: 'Water', value: 'water', color:'#F7D02C'}, {label:'Electric', value: 'electric', color: '#F7D02C'}, {label: 'Grass', value: 'grass', color: '#7AC74C'}, {label: 'Ice', value: 'ice', color: '#96D9D6'}, {label:'Fighting', value: 'fighting', color: '#C22E28'}, {label:'Poison', value: 'poison', color: '#A33EA1'}, {label:'Ground', value: 'ground', color: '#E2BF65'}, {label:'Flying', value: 'flying', color: '#A98FF3'}, {label: 'Psychic', value: 'psychic', color: '#F95587'}, {label:'Bug', value: 'bug', color: '#A6B91A'}, {label:'Rock', value: 'rock', color: '#B6A136'}, {label: 'Ghost', value: 'ghost', color: '#735797'}, {label:'Dragon', value: 'dragon', color: '#6F35FC'}, {label: 'Dark', value: 'dark', color: '#705746'}, {label: 'Steel', value: 'steel', color: '#B7B7CE'}, {label: 'Fairy', value: 'fairy', color: '#D685AD'}];
 
  const filter = ['ID', 'Name', 'Type', 'HP', 'Attack', 'Defense', 'SpAtk', 'SpDef', 'Speed', 'Total'];
  const filter1 = {
    id: 'id',
    name: 'name',
    type: 'type1',
    hp: 'hp',
    attack: 'atk',
    defense: 'def',
    spatk: 'spatk',
    spdef: 'spdef',
    speed: 'speed',
    Total: 'total'
}

  const [toggleFilter, setFilter] = useState(null);
  const [categoryInput, setInput] = useState('');

  const [searchInput, setSearch] = useState(false)



  return (
    <MDBContainer style={{display: 'flex', flexDirection: 'row' }}>
      <MDBNavbar color="amber lighten-4" style={{marginTop: '20px'}} light>
        <MDBContainer>
          <MDBNavbarBrand style={{width: '100%'}}>

            <MDBFormInline className="md-form mb-4" style={{width: '515px', marginLeft: '-5%'}}>
              <MDBHamburgerToggler color="#007bff" id="hamburger1" onClick={()=> setCollapse1(!collapse1)} />
                <input onChange={(e) => setSearch(e.target.value)} className="form-control form-control-med ml-3 w-75 border border-primary text-dark" type="text" placeholder="Enter PokeName" aria-label="Search" />
                <Button onClick={() => handleSearch(searchInput)} variant="primary" style={{marginLeft: '5px'}}>Search</Button>   

                  <MDBCollapse isOpen={collapse1} navbar>
                    <MDBNavbarNav center="true" style={{display: 'flex', justifyContent: 'space-evenly'}}>

                      <MDBNavItem style={{width: '24rem', marginLeft:'3rem', marginTop: 10, display: 'inline-block'}}>
                        <Select onChange={(e) => 
                          setSearch(e)} components={animatedComponents1} options={category} placeholder="Select Type" isMulti="true"/>
                      </MDBNavItem>

                    </MDBNavbarNav>
                  </MDBCollapse>
            </MDBFormInline>
  
            <MDBFormInline className="md-form mb-4" style={{width: '360px', position: 'absolute', right: '-30rem', top: '0px'}}>
              <div style={{width: '24rem', marginLeft:'3rem', marginTop: 10}}>
                <div className="form-control ml-3 w-75">
                  <FaFilter/>
                  <div style={{position: 'relative', bottom: '1.95rem', left: '1.7rem'}}>
                    <Typeahead id="filter" labelKey="label" options={filter} placeholder="Select Category" onInputChange={(e) => {
                      setInput(e.toLowerCase())
                    }}/>
                  </div>
                </div> 
                <Button variant="dark" style={{marginLeft: '5px'}} onClick={() => {
                  setCategory({input: filter1[categoryInput], direction: toggleFilter});
              }}>Filter</Button>  
                <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                  <div className="form-check">
                    <input name="ascending" className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option1" onClick={() => setFilter('asc')}/>
                    <label className="form-check-label" htmlFor="exampleRadios2">Lowest</label>
                  </div>
                  <div className="form-check">
                    <input name="descending" className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option1" onClick={() => setFilter('desc')}/>
                    <label className="form-check-label" htmlFor="exampleRadios2"> Highest</label>
                  </div>
                </div>
              </div>
            </MDBFormInline>
            </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </MDBContainer>
  );
}