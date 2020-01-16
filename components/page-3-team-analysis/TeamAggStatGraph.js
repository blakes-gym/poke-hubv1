import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radius, Legend } from 'recharts';

const sample = [
  {
    "subject": "Math",
    "A": 120,
    "B": 110,
    "fullMark": 150
  },
  {
    "subject": "Chinese",
    "A": 98,
    "B": 130,
    "fullMark": 150
  },
  {
    "subject": "English",
    "A": 86,
    "B": 130,
    "fullMark": 150
  },
  {
    "subject": "Geography",
    "A": 99,
    "B": 100,
    "fullMark": 150
  },
  {
    "subject": "Physics",
    "A": 85,
    "B": 90,
    "fullMark": 150
  },
  {
    "subject": "History",
    "A": 65,
    "B": 85,
    "fullMark": 150
  }
]

export default function TeamAggStatGraph ({ data }) {
  //formats data for chart
  let pokemonStats = [];
  //captures maximum value for each domain
  let maxVal = 0;
  let aggStats = {};

  data.forEach((pokemon) => {
    for (var stat in pokemon.Stats) {
      if (stat !== 'Total') {
        if(aggStats[stat] === undefined) {
          aggStats[stat] = pokemon.Stats[stat];
        } else {
          aggStats[stat] += pokemon.Stats[stat];
        }
        if (aggStats[stat] > maxVal) {
          maxVal = aggStats[stat];
        }
      }
    }
  })

  for (var key in aggStats) {
    let obj = {};
    obj.value = key;
    obj.stat = aggStats[key];
    pokemonStats.push(obj);
  }


  return (
    <RadarChart outerRadius={90} width={300} height={250} data={pokemonStats}>
    <PolarGrid />
    <PolarAngleAxis dataKey="stat" />
    <PolarRadiusAxis angle={30} domain={[0, (maxVal + 20)]} />
    <Radar name="Aggregate" dataKey="value" stroke="#FFFFFF" fill="#FFFFFF" fillOpacity={0.6} />
    <Legend />
    </RadarChart>
  )
}