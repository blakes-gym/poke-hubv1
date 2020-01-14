import "../styles.scss";
import Table from 'react-bootstrap/Table'
import Template from "../components/Template.js";
import Data from '../data/dummyData';
import {useRef, useState, useLayoutEffect} from 'react';
import { useWindowSize, useWindowWidth, useWindowHeight} from '@react-hook/window-size'
import hexData from '../hexData'
import { MdSearch } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Home() {

  const [width, height] = useWindowSize()
  console.log(width)

  return (
    <Template>
      {(width <= 500) ? (
        <div>
          <Table bordered hover>
            <thead className="thead-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Type</th>
              </tr>
            </thead>
            {Data.map((pokemon, index) => (
              <tbody>
                <tr key={index}>
                  <td>{pokemon.DexNo}</td>
                  <td>{pokemon.Name}</td>
                  <td>{pokemon.Type.map((type, index) => (<div style={{backgroundColor: hexData[type], color:'white', textAlign: 'center'}}>{type}</div>))}</td>
                </tr>
                <tr>
                  <td style={{borderRightStyle: 'none'}}></td>
                  <td style={{borderLeftStyle:'none', borderRightStyle: 'none', textAlign: "center", verticalAlign: "middle"}}><img src={pokemon.Sprite} align='middle' style={{  width: '60%', height: 'auto', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/></td>
                  <td style={{borderLeftStyle:'none'}}></td>
                </tr>
              </tbody>
            ))}
          </Table>
            <AiOutlineSearch style={{position: 'fixed', height:'15%', width:'15%', bottom: -20, right: 10}}/>
        </div>
      ) : (
        <Table bordered hover>
          <thead className="thead-dark">
            <tr>
              <th style={{borderRightStyle: 'none'}}>#</th>
              <th style={{borderLeftStyle:'none', borderRightStyle: 'none'}}></th>
              <th>Name</th>
              <th>Type</th>
              <th>HP</th>
              <th>Attack</th>
              <th>Defense</th>
              <th>Sp. Atk</th>
              <th>Sp. Def</th>
              <th>Speed</th>
              <th>Total</th>
              <th>Moves</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((pokemon, index) => (
              <tr key={index}>
                <td style={{width:'5%', borderRightStyle: 'none'}}><img style={{width:'40px', height:'5%'}} src={pokemon.Sprite}></img></td>
                <td style={{width:'5%', borderLeftStyle:'none', borderRightStyle: 'none'}}>{pokemon.DexNo}</td>
                <td style={{width:'10%'}}>{pokemon.Name}</td>
                <td style={{width:'10%'}}>{pokemon.Type.map((type, index) => (<div style={{backgroundColor: hexData[type], color:'white', textAlign: 'center'}}>{type}</div>))}</td>
                <td style={{width:'10%'}}>{pokemon.Stats.HP}</td>
                <td style={{width:'10%'}}>{pokemon.Stats.Attack}</td>
                <td style={{width:'10%'}}>{pokemon.Stats.Defense}</td>
                <td style={{width:'10%'}}>{pokemon.Stats['Sp. Atk']}</td>
                <td style={{width:'10%'}}>{pokemon.Stats['Sp. Def']}</td>
                <td style={{width:'10%'}}>{pokemon.Stats.Speed}</td>
                <td style={{width:'10%'}}>{pokemon.Stats.Total}</td>
                <td style={{width:'5%'}}>Moves</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Template>
  )
}

