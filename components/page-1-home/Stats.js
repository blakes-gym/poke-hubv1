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
  
// CHARJS
//   const [ref, setRef] = useState(React.createRef())

//   const data = {
//     labels: ['red', 'orange', 'yellow', 'blue', 'green', 'pink', 'purple'],
//     datasets: [{
//       label: 'HELLO',
//       data: [stats.HP, stats.Attack, stats.Defense, stats['Sp. Atk'], stats['Sp. Def'], stats.Speed, stats.Total],
//       backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
//       borderColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
//       borderWidth: 1
//     }]
//   }
// //   var ctx = document.getElementById('myChart').getContext('2d');
//   var myRadarChart = new Chart(ref.current, {
//     type: 'radar',
//     data: data
//   });
  
//   useEffect(() => {
//     // Update the document title using the browser API
//     console.log('asda', document)
//   });


// RADAR CHART
//   var data = [
//     {axes: 'HP', value: stats.HP},
//     {axes: 'Attack', value: stats.Attack},
//     {axes: 'Defense', value: stats.Defense},
//     {axes: 'Sp. Atk', value: stats[Sp. Atk]},
//     {axes: 'Sp. Def', value: stats[Sp. Def]},
//     {axes: 'Speed', value: stats.Speed},
//     {axes: 'Total', value: stats.Total}
//   ]
//   RadarChart.draw(".chart-container", data)


// C3 CHARTTTT
  // const BarChart =({data}) => (
  //   <C3Chart data={{json: data, type: 'bar'}} size={{width: 300}} interaction={{enabled: false}} color={{pattern: ['red', 'orange', 'yellow', 'blue', 'green', 'pink', 'purple']}}/>
  // )

  // const chartData = {
  //   HP: [stats.HP],
  //   Attack: [stats.Attack],
  //   Defense: [stats.Defense],
  //   'Sp. Atk': [stats['Sp. Atk']],
  //   'Sp. Def': [stats['Sp. Def']],
  //   Speed: [stats.Speed],
  //   Total: [stats.Total]
  // }
  return (
        <Card className="statsContainer">
          <Card.Header className="topHalf" style={{background: 'transparent', margin: '-0.25rem'}}>
            STATS
          </Card.Header>
          <table style={{fontSize: '0.5rem', margin: '5px'}}>
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
              <tr style={{textAlign: 'center'}}>
                <th className="Totalcolor" colSpan='2'>Total</th>
                <td className="Totalcolor" colSpan='2'>{stats.Total}</td>
              </tr>
            </tbody>
          </table>
          {/* <Card.Header className="botHalf" style={{width:'100%', height: 100}}>
          </Card.Header> */}
        </Card>
  )
}

// <Accordion defaultActiveKey="0">
//         <Card className="statsContainer">
//           <Card.Header className="topHalf" style={{width:'100%'}}>
//             <Accordion.Toggle as="none" className="statsButtonContainer" eventKey="0">
//               <button className="statsButton">STATS</button>
//             </Accordion.Toggle>
//           </Card.Header>
//           <Accordion.Collapse eventKey="0">
//             <table style={{fontSize: '0.5rem', margin: '5px'}}>
//               <tbody>
//                 <tr>
//                   <th>HP</th>
//                   <td className="paddingTable">{stats.HP}</td>
//                   <th>SP. ATK</th>
//                   <td className="paddingTable">{stats['Sp. Atk']}</td>
//                 </tr>
//                 <tr>
//                   <th>ATK</th>
//                   <td className="paddingTable">{stats.Attack}</td>
//                   <th>SP. DEF</th>
//                   <td className="paddingTable">{stats['Sp. Def']}</td>
//                 </tr>
//                 <tr>
//                   <th>DEF</th>
//                   <td className="paddingTable">{stats.Defense}</td>
//                   <th>Speed</th>
//                   <td className="paddingTable">{stats.Speed}</td>
//                 </tr>
//                 <tr>
//                   <th colSpan='2'>Total</th>
//                   <td className="paddingTable">{stats.Total}</td>
//                 </tr>
//               </tbody>
//             </table>
//           </Accordion.Collapse>
//           {/* <Card.Header className="botHalf" style={{width:'100%', height: 100}}>
//           </Card.Header> */}
//         </Card>
//       </Accordion>