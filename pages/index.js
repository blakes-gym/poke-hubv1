import Window from '../components/page-1-home/Window.js';
import Mobile from '../components/page-1-home/Mobile.js';
import './index.scss';
import {useState, useEffect} from 'react';

// import { useQuery } from '@apollo/react-hooks'
// import gql from 'graphql-tag'
import fetch from 'isomorphic-unfetch';

import queryString from 'query-string';

// const test = gql`
//   {
//     pokemon(id: [34, 55, 877, 574, 777, 3, 20, 36, 40, 100]) {
//       id
//       name
//       type1
//       type2
//       hp
//       atk
//       def
//       spatk
//       spdef
//       speed
//       total
//       sprite
//       icon
//     }
//   }
// `

const poke = {
  id: [1, 2, 3, 4, 5, 6, 7, 8, 9, 220, 800, 12, 254]
}
const test = queryString.stringify(poke)





export default function Index({data}) {
  const [pokemon, setPoke] = useState(data);
  const [category, setCategory] = useState('');
  
  useEffect(() => {
    setPoke(pokemon.sort(compareValues(category.input, category.direction)));
  }, [category, pokemon]);

  function compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
      const varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  };

  return (
    <div style={{overflow: 'auto'}}>
      <Mobile compareValues={compareValues} setCategory={setCategory} pokemon={pokemon}/>
      <Window compareValues={compareValues} setCategory={setCategory} pokemon={pokemon}/>
    </div>
  )
}

  
Index.getInitialProps = async function() {
  const res = await fetch(`http://poke-hub-backend.herokuapp.com/api/pokemon?${test}`);
  const data = await res.json();
  console.log('test', data)
  return ({
    data,
  });
};

