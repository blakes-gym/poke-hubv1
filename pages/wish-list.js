import '../components/page-2-wishlist/page-2-styles.scss';
import pokemonData from '../data/dummyData.js';
import PokemonRow from '../components/page-2-wishlist/PokemonRow.js';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import WL_WindowView from '../components/page-2-wishlist/WL_WindowView.js';
import PikaJulian from '../components/PikaJulian.js';
import fetch from 'isomorphic-unfetch';
import { server } from '../constants';
import queryString from 'query-string';

export default function Wishlist({ allPokemon }) {
  return (
    <div>
      <WL_WindowView pokemonData={allPokemon} />
      <PokemonRow pokemonData={allPokemon} />
    </div>
  );
}

Wishlist.getInitialProps = async function() {
  const res = await fetch(
    'https://poke-hub-backend.herokuapp.com/api/wishlist'
  );
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  if (data.length) {
    return {
      allPokemon: data.map(pokemon => {
        return pokemon;
      })
    };
  } else {
    return {
      allPokemon: null
    };
  }
};
