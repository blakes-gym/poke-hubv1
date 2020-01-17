import '../components/page-2-wishlist/page-2-styles.scss';
import pokemonData from '../data/dummyData.js';
import PokemonRow from '../components/page-2-wishlist/PokemonRow.js';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const GET_POKEMON = gql`
  {
    pokemon(id: [144, 67, 93, 5, 12, 8, 17, 203, 603, 708, 395, 148]) {
      id
      name
      sprite
      icon
      type1
      type2
      hp
      atk
      def
      spatk
      spdef
      speed
      total
    }
  }
`;

export default function Wishlist() {
  const { loading, err, data } = useQuery(GET_POKEMON);
  if (loading) return <div>loading</div>;
  if (err) return <div>error</div>;

  return (
    <div>
      <PokemonRow pokemonData={data} />
    </div>
  );
}
