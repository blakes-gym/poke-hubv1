import MoveSelection from './MoveSelection.js';
import allPokemonData from '../../data/dummyData.js';

export default function Moves() {
  return (
    <div>
      <MoveSelection allPokemon={allPokemonData} />
      <MoveSelection allPokemon={allPokemonData} />
      <MoveSelection allPokemon={allPokemonData} />
      <MoveSelection allPokemon={allPokemonData} />
    </div>
  );
}
