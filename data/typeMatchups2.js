export default {
  normal: {
    os: [],
    ow: ['rock', 'steel'],
    ds: [],
    dw: ['fighting'],
    oi: ['ghost'],
    di: ['ghost']
  },
  fire: {
    os: ['grass', 'bug', 'ice', 'steel'],
    ow: ['fire', 'water', 'rock', 'dragon'],
    ds: ['fire', 'grass', 'ice', 'bug', 'steel', 'fairy'],
    dw: ['water', 'ground', 'rock'],
    oi: [],
    di: []
  },
  water: {
    os: ['fire', 'ground', 'rock'],
    ow: ['water', 'grass', 'dragon'],
    ds: ['fire', 'water', 'ice', 'dark', 'steel'],
    dw: ['electric', 'grass'],
    oi: [],
    di: []
  },
  electric: {
    os: ['water', 'flying'],
    ow: ['electric', 'ground', 'dragon'],
    ds: ['electric', 'flying', 'steel'],
    dw: ['ground'],
    oi: ['ground'],
    di: []
  },
  grass: {
    os: ['water', 'ground', 'rock'],
    ow: ['fire', 'grass', 'poison', 'flying', 'bug', 'dragon', 'steel'],
    ds: ['water', 'grass', 'ground'],
    dw: ['fire', 'ice', 'poison', 'flying', 'bug'],
    oi: [],
    di: []
  },
  ice: {
    os: ['grass', 'ground', 'flying', 'dragon'],
    ow: ['fire', 'water', 'ice', 'steel'],
    ds: ['ice'],
    dw: ['fire', 'fighting', 'rock', 'dark', 'steel'],
    oi: [],
    di: []
  },
  fighting: {
    os: ['normal', 'ice', 'rock', 'Dark', 'steel'],
    ow: ['poison', 'flying', 'psychic', 'bug', 'Fairy'],
    ds: ['bug', 'rock'],
    dw: ['flying', 'psychic', 'fairy'],
    oi: ['ghost'],
    di: []
  },
  poison: {
    os: ['grass', 'Fairy'],
    ow: ['poison', 'ground', 'rock', 'Ghost'],
    ds: ['grass', 'fighting', 'poison', 'bug', 'fairy'],
    dw: ['ground', 'psychic'],
    oi: [],
    di: []
  },
  ground: {
    os: ['fire', 'electric', 'poison', 'rock', 'steel'],
    ow: ['grass', 'bug'],
    ds: ['electric', 'poison', 'rock'],
    dw: ['water', 'grass', 'ice'],
    oi: ['flying'],
    di: ['electric']
  },
  flying: {
    os: ['grass', 'fighting', 'bug'],
    ow: ['electric', 'rock', 'steel'],
    ds: ['grass', 'fighting', 'bug'],
    dw: ['electric', 'ice', 'rock'],
    oi: [],
    di: ['ground']
  },
  psychic: {
    os: ['fighting', 'poison'],
    ow: ['psychic', 'steel'],
    ds: ['fighting', 'psychic'],
    dw: ['bug', 'ghost'],
    oi: ['dark'],
    di: []
  },
  bug: {
    os: ['grass', 'psychic', 'dark'],
    ow: ['fire', 'fighting', 'poison', 'flying', 'ghost', 'steel', 'fairy'],
    ds: ['grass', 'fighting', 'ground'],
    dw: ['fire', 'flying', 'rock', 'dark'],
    oi: [],
    di: []
  },
  rock: {
    os: ['fire', 'ice', 'flying', 'bug'],
    ow: ['fighting', 'ground', 'steel'],
    ds: ['normal', 'fire', 'poison', 'flying', 'dark'],
    dw: ['water', 'grass', 'fighting', 'ground', 'steel'],
    oi: [],
    di: []
  },
  ghost: {
    os: ['psychic', 'ghost'],
    ow: ['dark'],
    ds: ['bug'],
    dw: ['ghost'],
    oi: ['normal'],
    di: ['normal', 'fighting']
  },
  dragon: {
    os: ['dragon'],
    ow: ['steel', 'fairy'],
    ds: ['fire', 'water', 'electric', 'grass', 'dark'],
    dw: ['ice', 'dragon', 'fairy'],
    oi: ['fairy'],
    di: []
  },
  dark: {
    os: ['Grass', 'bug', 'ice', 'steel'],
    ow: ['fire', 'water', 'rock', 'dragon'],
    ds: ['ghost'],
    dw: ['bug', 'fairy'],
    oi: [],
    di: ['psychic']
  },
  steel: {
    os: ['ice', 'rock', 'fairy'],
    ow: ['fire', 'water', 'electric', 'steel'],
    ds: [
      'normal',
      'grass',
      'ice',
      'flying',
      'psychic',
      'bug',
      'rock',
      'dragon',
      'steel',
      'fairy'
    ],
    dw: ['fire', 'fighting', 'ground', 'dark'],
    oi: [],
    di: ['poison']
  },
  fairy: {
    os: ['fighting', 'dragon', 'dark'],
    ow: ['fire', 'poison', 'steel'],
    ds: ['bug', 'dragon'],
    dw: ['steel'],
    oi: [],
    di: ['dragon']
  }
}
