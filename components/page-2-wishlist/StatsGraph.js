import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radius,
  Legend
} from 'recharts';

export default function TeamMemberGraph({ pokemon }) {
  //formats data for chart
  let pokemonStats = [
    {
      stat: 'HP',
      value: pokemon.hp
    },
    {
      stat: 'Atk',
      value: pokemon.attack
    },
    {
      stat: 'Def',
      value: pokemon.defense
    },
    {
      stat: 'Sp. Atk',
      value: pokemon.spatk
    },
    {
      stat: 'Sp. Def',
      value: pokemon.spdef
    },
    {
      stat: 'Speed',
      value: pokemon.speed
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
