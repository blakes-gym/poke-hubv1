export default [
  {
    type: 'normal',
    strengths: null,
    weaknesses: ['fighting'],
    immune: ['ghost']
  },
  {
    type: 'fire',
    strengths: ['grass', 'bug', 'ice', 'steel'],
    weaknesses: ['fire', 'water', 'rock', 'dragon'],
    immune: null
  },
  {
    type: 'water',
    strengths: ['fire', 'ground', 'rock'],
    weaknesses: ['water', 'grass', 'dragon'],
    immune: null
  },
  {
    type: 'electric',
    strengths: ['water', 'flying'],
    weaknesses: ['electric', 'ground', 'dragon'],
    immune: ['ground']
  },
  {
    type: 'grass',
    strengths: ['water', 'ground', 'rock'],
    weaknesses: ['fire', 'grass', 'poison', 'flying', 'bug', 'dragon', 'steel'],
    immune: null
  },
  {
    type: 'ice',
    strengths: ['grass', 'ground', 'flying', 'dragon'],
    weaknesses: ['fire', 'water', 'ice', 'steel'],
    immune: null
  },
  {
    type: 'fighting',
    strengths: ['normal', 'ice', 'rock', 'Dark', 'steel'],
    weaknesses: ['poison', 'flying', 'psychic', 'bug', 'Fairy'],
    immune: ['ghost']
  },
  {
    type: 'poison',
    strengths: ['grass', 'Fairy'],
    weaknesses: ['poison', 'ground', 'rock', 'Ghost'],
    immune: null
  },
  {
    type: 'ground',
    strengths: ['fire', 'electric', 'poison', 'rock', 'steel'],
    weaknesses: ['grass', 'bug'],
    immune: ['electric', 'flying']
  },
  {
    type: 'flying',
    strengths: ['grass', 'fighting', 'bug'],
    weaknesses: ['electric', 'rock', 'steel'],
    immune: null
  },
  {
    type: 'psychic',
    strengths: ['fighting', 'poison'],
    weaknesses: ['psychic', 'steel'],
    immune: ['dark']
  },
  {
    type: 'bug',
    strengths: ['grass', 'psychic', 'dark'],
    weaknesses: [
      'fire',
      'fighting',
      'poison',
      'flying',
      'ghost',
      'steel',
      'fairy'
    ],
    immune: null
  },
  {
    type: 'rock',
    strengths: ['fire', 'ice', 'flying', 'bug'],
    weaknesses: ['fighting', 'ground', 'steel'],
    immune: null
  },
  {
    type: 'ghost',
    strengths: ['psychic', 'ghost'],
    weaknesses: ['dark'],
    immune: ['normal']
  },
  {
    type: 'dragon',
    strengths: ['dragon'],
    weaknesses: ['steel', 'fairy'],
    immune: ['fairy']
  },
  {
    type: 'dark',
    strengths: ['Grass', 'bug', 'ice', 'steel'],
    weaknesses: ['fire', 'water', 'rock', 'dragon'],
    immune: null
  },
  {
    type: 'steel',
    strengths: ['ice', 'rock', 'fairy'],
    weaknesses: ['fire', 'water', 'electric', 'steel'],
    immune: null
  },
  {
    type: 'fairy',
    strengths: ['fighting', 'dragon', 'dark'],
    weaknesses: ['fire', 'poison', 'steel'],
    immune: null
  }
]
