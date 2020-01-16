import C3Chart from 'react-c3js';
// import RadarChart from 'radar-chart-d3';
// import c3js from 'c3.js';
import Chart from 'chart.js';
import {useState, useEffect} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import {AwesomeButton} from 'react-awesome-button/';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';
import Card from 'react-bootstrap/Card'
import hexData from '../../hexData';

export default function Stats ({stats, type}) {
  return (
    <Card className="statsContainer">
      <Card.Header className="topHalf" style={{background: 'transparent', margin: '-0.25rem'}}>STATS</Card.Header>
      <table style={{fontSize: '0.75rem', margin: '5px'}}>
        <tbody>
          <tr>
            <th className="HPcolor">HP</th>
            <td className="HPcolor">{stats.HP}</td>
            <th className="SpAttackcolor">SP. ATK</th>
            <td className="SpAttackcolor">{stats['Sp. Atk']}</td>
          </tr>
          <tr>
            <th className="Attackcolor">ATK</th>
            <td className="Attackcolor">{stats.Attack}</td>
            <th className="SpDefensecolor">SP. DEF</th>
            <td className="SpDefensecolor">{stats['Sp. Def']}</td>
          </tr>
          <tr>
            <th className="Defensecolor">DEF</th>
            <td className="Defensecolor">{stats.Defense}</td>
            <th className="Speedcolor">Speed</th>
            <td className="Speedcolor">{stats.Speed}</td>
          </tr>
          <tr>
            <th className="Totalcolor">TOTAL</th>
            <td className="Totalcolor">{stats.Total}</td>
          </tr>
        </tbody>
      </table>
    </Card>
  )
};