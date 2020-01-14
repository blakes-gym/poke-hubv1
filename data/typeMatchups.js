export default {
  normal: {
    strengths: null,
    weaknesses: ['fighting'],
    immune: ['ghost']
  },
  fire: {
    strengths: ['grass', 'bug', 'ice', 'steel'],
    weaknesses: ['fire', 'water', 'rock', 'dragon'],
    immune: null
  },
  water: {
    strengths: ['fire', 'ground', 'rock'],
    weaknesses: ['water', 'grass', 'dragon'],
    immune: null
  },
  electric: {
    strengths: ['water', 'flying'],
    weaknesses: ['electric', 'ground', 'dragon'],
    immune: ['ground']
  },
  grass: {
    strengths: ['water', 'ground', 'rock'],
    weaknesses: ['fire', 'grass', 'poison', 'flying', 'bug', 'dragon', 'steel'],
    immune: null
  },
  ice: {
    strengths: ['grass', 'ground', 'flying', 'dragon'],
    weaknesses: ['fire', 'water', 'ice', 'steel'],
    immune: null
  },
  fighting: {
    strengths: ['normal', 'ice', 'rock', 'Dark', 'steel'],
    weaknesses: ['poison', 'flying', 'psychic', 'bug', 'Fairy'],
    immune: ['ghost']
  },
  poison: {
    strengths: ['grass', 'Fairy'],
    weaknesses: ['poison', 'ground', 'rock', 'Ghost'],
    immune: null
  },
  ground: {
    strengths: ['fire', 'electric', 'poison', 'rock', 'steel'],
    weaknesses: ['grass', 'bug'],
    immune: ['electric', 'flying']
  },
  flying: {
    strengths: ['grass', 'fighting', 'bug'],
    weaknesses: ['electric', 'rock', 'steel'],
    immune: null
  },
  psychic: {
    strengths: ['fighting', 'poison'],
    weaknesses: ['psychic', 'steel'],
    immune: ['dark']
  },
  bug: {
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
  rock: {
    strengths: ['fire', 'ice', 'flying', 'bug'],
    weaknesses: ['fighting', 'ground', 'steel'],
    immune: null
  },
  ghost: {
    strengths: ['psychic', 'ghost'],
    weaknesses: ['dark'],
    immune: ['normal']
  },
  dragon: {
    strengths: ['dragon'],
    weaknesses: ['steel', 'fairy'],
    immune: ['fairy']
  },
  dark: {
    strengths: ['Grass', 'bug', 'ice', 'steel'],
    weaknesses: ['fire', 'water', 'rock', 'dragon'],
    immune: null
  },
  steel: {
    strengths: ['ice', 'rock', 'fairy'],
    weaknesses: ['fire', 'water', 'electric', 'steel'],
    immune: null
  },
  fairy: {
    strengths: ['fighting', 'dragon', 'dark'],
    weaknesses: ['fire', 'poison', 'steel'],
    immune: null
  }
};
