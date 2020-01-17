module.exports = [
  {
    type: 'normal',
    os: [],
    ow: ['rock', 'steel'],
    ds: [],
    dw: ['fighting'],
    i: ['ghost']
  },
  {
    type: 'fire',
    os: ['grass', 'bug', 'ice', 'steel'],
    ow: ['fire', 'water', 'rock', 'dragon'],
    ds: ['fire', 'grass', 'ice', 'steel', 'fairy'],
    dw: ['water', 'ground', 'rock'],
    i: null
  },
  {
    type: 'water',
    os: ['fire', 'ground', 'rock'],
    ow: ['water', 'grass', 'dragon'],
    ds: ['fire', 'water', 'ice', 'steel'],
    dw: ['electric', 'grass'],
    i: null
  },
  {
    type: 'electric',
    os: ['water', 'flying'],
    ow: ['electric', 'ground', 'dragon'],
    ds: [],
    dw: [],
    i: ['ground']
  },
  {
    type: 'grass',
    os: ['water', 'ground', 'rock'],
    ow: ['fire', 'grass', 'poison', 'flying', 'bug', 'dragon', 'steel'],
    ds: [],
    dw: [],
    i: null
  },
  {
    type: 'ice',
    os: ['grass', 'ground', 'flying', 'dragon'],
    ow: ['fire', 'water', 'ice', 'steel'],
    ds: [],
    dw: [],
    i: null
  },
  {
    type: 'fighting',
    os: ['normal', 'ice', 'rock', 'Dark', 'steel'],
    ow: ['poison', 'flying', 'psychic', 'bug', 'Fairy'],
    ds: [],
    dw: [],
    i: ['ghost']
  },
  {
    type: 'poison',
    os: ['grass', 'Fairy'],
    ow: ['poison', 'ground', 'rock', 'Ghost'],
    ds: [],
    dw: [],
    i: null
  },
  {
    type: 'ground',
    os: ['fire', 'electric', 'poison', 'rock', 'steel'],
    ow: ['grass', 'bug'],
    ds: [],
    dw: [],
    i: ['electric', 'flying']
  },
  {
    type: 'flying',
    os: ['grass', 'fighting', 'bug'],
    ow: ['electric', 'rock', 'steel'],
    ds: [],
    dw: [],
    i: null
  },
  {
    type: 'psychic',
    os: ['fighting', 'poison'],
    ow: ['psychic', 'steel'],
    ds: [],
    dw: [],
    i: ['dark']
  },
  {
    type: 'bug',
    os: ['grass', 'psychic', 'dark'],
    ow: ['fire', 'fighting', 'poison', 'flying', 'ghost', 'steel', 'fairy'],
    ds: [],
    dw: [],
    i: null
  },
  {
    type: 'rock',
    os: ['fire', 'ice', 'flying', 'bug'],
    ow: ['fighting', 'ground', 'steel'],
    ds: [],
    dw: [],
    i: null
  },
  {
    type: 'ghost',
    os: ['psychic', 'ghost'],
    ow: ['dark'],
    ds: [],
    dw: [],
    i: ['normal']
  },
  {
    type: 'dragon',
    os: ['dragon'],
    ow: ['steel', 'fairy'],
    ds: [],
    dw: [],
    i: ['fairy']
  },
  {
    type: 'dark',
    os: ['Grass', 'bug', 'ice', 'steel'],
    ow: ['fire', 'water', 'rock', 'dragon'],
    ds: [],
    dw: [],
    i: null
  },
  {
    type: 'steel',
    os: ['ice', 'rock', 'fairy'],
    ow: ['fire', 'water', 'electric', 'steel'],
    ds: [],
    dw: [],
    i: null
  },
  {
    type: 'fairy',
    os: ['fighting', 'dragon', 'dark'],
    ow: ['fire', 'poison', 'steel'],
    ds: [],
    dw: [],
    i: null
  }
]
