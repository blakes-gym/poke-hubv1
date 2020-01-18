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
  // const { loading, err, data } = useQuery(GET_POKEMON);
  // if (loading)
  //   return (
  //     <div>
  //       <PikaJulian />
  //       <div style={{ textAlign: 'center' }}>
  //         <h4>Loading your Wishlist!</h4>
  //       </div>
  //     </div>
  //   );
  // if (err) return <div>error</div>;
  return (
    <div>
      <WL_WindowView pokemonData={allPokemon} />
      {/* <PokemonRow pokemonData={data} /> */}
    </div>
  );
}

Wishlist.getInitialProps = async function() {
  const query = queryString.stringifyUrl({
    url: server + '/pokemon',
    query: { id: [110, 350, 4, 69, 420, 118, 473, 94, 80] }
  });
  const res = await fetch(query);
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}, Body: ${data}`);

  return {
    allPokemon: data.map(pokemon => {
      return pokemon;
    })
  };
};
