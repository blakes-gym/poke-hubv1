import Window from '../components/page-1-home/Window.js';
import Mobile from '../components/page-1-home/Mobile.js';
import './index.scss';

import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const test = gql`
  {
    pokemon(id: [34, 55, 877, 574, 777, 3, 20, 36, 40, 100]) {
      id
      name
      type1
      type2
      hp
      atk
      def
      spatk
      spdef
      speed
      total
      sprite
      icon
    }
  }
`

export default function Index() {
  const { loading, err, data } = useQuery(test)
  if (loading) return <div>loading. . .</div>
  if (err) return <div>Error</div>
  console.log(data)
  return (
    <div style={{overflow: 'auto'}}>
      <Mobile pokemon={data.pokemon}/>
      <Window pokemon={data.pokemon}/>
    </div>
  )
}




// import fetch from 'isomorphic-unfetch';

// Index.getInitialProps = async function() {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//   const data = await res.json();

//   console.log(`Show data fetched. Count: ${data.length}`);

//   return {
//     shows: data.map(entry => entry.show)
//   };
// };

// export default Index;