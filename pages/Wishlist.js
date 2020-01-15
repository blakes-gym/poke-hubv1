import pokemonData from '../data/dummyData.js';
import PokemonRow from '../components/page-2-wishlist/PokemonRow.js';

export default function Wishlist() {
  return (
    <div>
      {pokemonData.map((pokemon, index) => {
        return <PokemonRow pokemon={pokemon} key={index} />;
      })}
    </div>
  );
}
