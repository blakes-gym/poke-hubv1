import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radius, Legend, Tooltip } from 'recharts';
import {useState} from 'react'

export default function StatsChart ({ stats }) {
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
        <PolarRadiusAxis angle={30} domain={[0, 200]} />
        <Radar name="Total" dataKey="stat" stroke="rgba(255, 159, 64)" fill="rgba(255, 159, 64)" label="true" fillOpacity={1} />
      </RadarChart>
    </div>
  )
}

