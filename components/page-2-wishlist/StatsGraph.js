import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radius,
  Legend
} from 'recharts';

export default function TeamMemberGraph({ stats }) {
  //formats data for chart
  let pokemonStats = [
    {
      stat: 'HP',
      value: stats.hp
    },
    {
      stat: 'Atk',
      value: stats.attack
    },
    {
      stat: 'Def',
      value: stats.defense
    },
    {
      stat: 'Sp. Atk',
      value: stats.spAtk
    },
    {
      stat: 'Sp. Def',
      value: stats.spDef
    },
    {
      stat: 'Speed',
      value: stats.speed
    }
  ];
  //captures maximum value for each domain
  let maxVal = 0;

  for (var stat of pokemonStats) {
    if (stat.value > maxVal) {
      maxVal = stat.value;
    }
  }

  return (
    <RadarChart outerRadius={80} width={730} height={250} data={pokemonStats}>
      <PolarGrid />
      <PolarAngleAxis dataKey='stat' />
      <PolarRadiusAxis angle={60} domain={[0, maxVal + 20]} />
      <Radar
        name='Stats'
        dataKey='value'
        stroke='rgba(255, 159, 64, 0.2)'
        fill='rgba(255, 159, 64, 0.2)'
        fillOpacity={1}
      />
      <Legend />
    </RadarChart>
  );
}
