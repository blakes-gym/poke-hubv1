import Card from './Card';

// http://poke-hub-backend.herokuapp.com/api/pokemon
// THIS IS TO GET ALL

export default function Mobile ({pokemon}) {
  return (
    <div className="d-sm-none">
      {pokemon.map((pokemon, index) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  )
}