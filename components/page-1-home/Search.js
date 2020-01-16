import React from "react";
import { MDBCol, MDBFormInline } from "mdbreact";
import {FaSearch} from 'react-icons/fa';
import Form from 'react-bootstrap/Form'
import {useState} from 'react'


import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBContainer, MDBHamburgerToggler } from 'mdbreact';

export default function Search () {
  const [collapse, setCollapse] = useState(false)

  return (
    <MDBContainer >
      <MDBNavbar color="amber lighten-4" style={{ marginTop: '20px'}} light>
        <MDBContainer>
          <MDBNavbarBrand style={{width: '100%', display: 'flex'}}>
            <MDBFormInline className="md-form mb-4" style={{width: '50%'}}>
              <FaSearch icon="search" /><input className="form-control form-control-sm ml-3 w-75" style={{width:'100%'}} type="text" placeholder="Enter PokeName" aria-label="Search" />
            </MDBFormInline>

          <MDBHamburgerToggler color="#d3531a" id="hamburger1" onClick={()=> setCollapse(!collapse)} />
            <MDBCollapse isOpen={collapse} navbar>
              <MDBNavbarNav center>
                <MDBNavItem active>
                  <Form.Group>
                    <Form.Label>Type</Form.Label>
                    <Form.Control as="select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                  </Form.Group> 
                </MDBNavItem>
                <MDBNavItem>
  
                </MDBNavItem>
                <MDBNavItem>
  
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
            </MDBNavbarBrand>

        </MDBContainer>
      </MDBNavbar>
    </MDBContainer>



    // <MDBCol md="6">
    //   <MDBFormInline className="md-form">
    //     <FaSearch icon="search" />
    //     <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
    //   </MDBFormInline>

    //   <Form.Group>
    //     <Form.Label>Type</Form.Label>
    //     <Form.Control as="select">
    //       <option>1</option>
    //       <option>2</option>
    //       <option>3</option>
    //       <option>4</option>
    //       <option>5</option>
    //     </Form.Control>
    //   </Form.Group>
    //   {/* <Form.Group>
    //     <Form.Label>Example multiple select</Form.Label>
    //     <Form.Control as="select" multiple>
    //       <option>1</option>
    //       <option>2</option>
    //       <option>3</option>
    //       <option>4</option>
    //       <option>5</option>
    //     </Form.Control>
    //   </Form.Group> */}


    // </MDBCol>
  );
}