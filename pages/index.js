import Window from '../components/page-1-home/Window.js';
import Mobile from '../components/page-1-home/Mobile.js'
import '../components/page-1-home/page-1-styles.scss';

export default function Index() {
  return (
    <div>
      <Mobile />
      <Window />
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