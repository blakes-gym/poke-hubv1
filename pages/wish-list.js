import '../components/page-2-wishlist/page-2-styles.scss';
import pokemonData from '../data/dummyData.js';
import PokemonRow from '../components/page-2-wishlist/PokemonRow_New.js';

export default function Wishlist() {
  return (
    <div>
      <PokemonRow pokemonData={pokemonData} />
    </div>
  );
}
