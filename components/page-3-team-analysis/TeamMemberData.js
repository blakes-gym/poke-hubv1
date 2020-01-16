import Table from 'react-bootstrap/Table';
import data from '../../data/dummyData.js';
import { useState, useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radius, Legend } from 'recharts';


export default function TeamMemberData ({ pokemon }) {

  return (
  <Table responsive>
  <tbody>
    <tr>
      <td>HP</td>
      <td>{pokemon.Stats.HP}</td>
    </tr>
    <tr>
      <td>Attack</td>
      <td>{pokemon.Stats.Attack}</td>
    </tr>
    <tr>
      <td>Defense</td>
      <td>{pokemon.Stats.Defense}</td>
    </tr>
    <tr>
      <td>Sp. Atk</td>
      <td>{pokemon.Stats['Sp. Atk']}</td>
    </tr>
    <tr>
      <td>Sp. Def</td>
      <td>{pokemon.Stats['Sp. Def']}</td>
    </tr>
    <tr>
      <td>Speed</td>
      <td>{pokemon.Stats.Speed}</td>
    </tr>
    <tr>
      <td>Total</td>
      <td>{pokemon.Stats.Total}</td>
    </tr>
  </tbody>
  </Table>
  )
}

