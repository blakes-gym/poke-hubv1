import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";
import {FaSearch} from 'react-icons/fa';

export default function Search () {
  return (
    <MDBCol md="6">
      <div className="input-group md-form form-sm form-1 pl-0">
        <div className="input-group-prepend">
        </div>
        <input className="form-control my-0 py-1" type="text" placeholder="Enter Pokemon" aria-label="Search" />
        <span className="input-group-text purple lighten-3" id="basic-text1">
            <FaSearch/>
        </span>
      </div>
    </MDBCol>
  );
}

