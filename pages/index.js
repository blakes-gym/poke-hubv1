import Window from '../components/page-1-home/Window.js';
import Mobile from '../components/page-1-home/Mobile.js';
import './index.scss';
import {useState, useEffect} from 'react';
import {server} from '../constants/index.js';
import fetch from 'isomorphic-unfetch';
import queryString from 'query-string';
import axios from 'axios';


export default function Index({data}) {
  const [pokemon, setPoke] = useState(data);
  const [category, setCategory] = useState('');
  
  useEffect(() => {    
    setPoke(pokemon.sort(compareValues(category.input, category.direction)));
  }, [category, pokemon]);


  const compareValues = (key, order = 'asc') => {
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

  const handleSearch = (search) => {
    if (Array.isArray(search)) {
      if (search.length) {
        var types = [];
        for (var i = 0; i < search.length; i++) {
          types.push(search[i].value)
        }
        var query = queryString.stringify({type: types});
        axios.get(`http://localhost:4000/api/pokemon?${query}`)
          .then(({data}) => setPoke(data))
          .catch(err => console.error(err))
      } else {
        setPoke(data)
      }
    } else {
      if (search) {
        for (var i = 0; i < data.length; i++) {
          if (data[i].name === search) {
            setPoke([data[i]])
          }
        }
      } else {
        setPoke(data)
      }
    }
  }


  return (
    <div style={{overflow: 'auto'}}>
      <Mobile handleSearch={handleSearch} compareValues={compareValues} setCategory={setCategory} pokemon={pokemon}/>
      <Window handleSearch={handleSearch} compareValues={compareValues} setCategory={setCategory} pokemon={pokemon}/>
    </div>
  )
}

  
Index.getInitialProps = async function() {
  const res = await fetch(server + '/pokemon/all');
  const data = await res.json();
  return ({
    data,
  });
};

