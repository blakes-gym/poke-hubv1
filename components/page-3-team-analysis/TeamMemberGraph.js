import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radius, Legend } from 'recharts';

export default function TeamMemberGraph ({ stats }) {
  //formats data for chart
  let pokemonStats = [];
  //captures maximum value for each domain
  let maxVal = 0;

  for (var key in stats) {
    if (key !== 'Total') {
      let obj = {};
      obj.stat = key;
      obj.value = stats[key];
      pokemonStats.push(obj);

      if (stats[key] > maxVal) {
        maxVal = stats[key];
      }
    }
  }

  return (
    <RadarChart outerRadius={80} width={250} height={250} data={pokemonStats}>
  <PolarGrid />
  <PolarAngleAxis dataKey="stat"/>
  <PolarRadiusAxis angle={60} domain={[0, (maxVal + 20)]} />
  <Radar name="Total" dataKey="value" stroke="rgba(255, 159, 64, 0.2)" fill="rgba(255, 159, 64, 0.2)" fillOpacity={1} />
  <Legend />
  </RadarChart>
  )
}