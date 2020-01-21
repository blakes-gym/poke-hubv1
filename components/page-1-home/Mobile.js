import Card from './Card';
import MobileSearch from './MobileSearch.js'
import {useState} from 'react'
import {FaSearch} from 'react-icons/fa'

export default function Mobile ({pokemon, setCategory, compareValues, handleSearch}) {
  const [show, setShow] = useState(false);
  
  return (
    <div className="d-sm-none">
      {pokemon.map((pokemon, index) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
      <div style={{position: 'fixed', zIndex: 5, bottom: 15, right: 15}}>
        <FaSearch onClick={() => setShow(!show)} size='3rem'/>
      </div>
      {show ? (
        <MobileSearch handleSearch={handleSearch} setShow={setShow} compareValues={compareValues} setCategory={setCategory} show={show} setShow={setShow}/>
      ) : null}
    </div>
  )
}
