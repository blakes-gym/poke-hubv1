import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radius, Legend, Tooltip } from 'recharts';
import hexData from '../../utils/hexData';

export default function StatsChart ({ stats, type }) {
//   formats data for chart
//   let pokemonStats = [];
//   //captures maximum value for each domain

  var maxVal = 0;
  for (var i = 0; i < stats.length; i++) {
    if (stats[i].stat > maxVal) {
        maxVal = stats[i].stat;
    }
  }

  return (
    <div>
      <RadarChart outerRadius={80} width={290} height={250} data={stats}>
        <Tooltip cursor={{ stroke: 'black', strokeWidth: 2 }} />
        <PolarGrid />
        <PolarAngleAxis dataKey="value"/>
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar name="Total" dataKey="stat" stroke="black" fill={hexData[type]} label="true" fillOpacity={1} />
      </RadarChart>
    </div>
  )
}

