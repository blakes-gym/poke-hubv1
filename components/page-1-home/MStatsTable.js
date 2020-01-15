import C3Chart from 'react-c3js';
// import RadarChart from 'radar-chart-d3';
// import c3js from 'c3.js';
import Chart from 'chart.js';
import {useState, useEffect} from 'react';


export default function MStatsTable ({stats}) {
  
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
  const BarChart =({data}) => (
    <C3Chart data={{json: data, type: 'bar'}} size={{width: 300}} interaction={{enabled: false}} color={{pattern: ['red', 'orange', 'yellow', 'blue', 'green', 'pink', 'purple']}}/>
  )

  const chartData = {
    HP: [stats.HP],
    Attack: [stats.Attack],
    Defense: [stats.Defense],
    'Sp. Atk': [stats['Sp. Atk']],
    'Sp. Def': [stats['Sp. Def']],
    Speed: [stats.Speed],
    Total: [stats.Total]
  }

  return (
    <span>
      {/* <myRadarChart /> */}
      <BarChart data={chartData} />
      {/* <canvas ref={ref}></canvas> */}
    </span>
  )

}