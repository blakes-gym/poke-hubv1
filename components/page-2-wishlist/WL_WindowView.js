import WindowCard from './WindowCard.js';
import Container from 'react-bootstrap/Container';
import CardRow from './CardRow.js';

export default function WL_WindowView({ pokemonData }) {
  var pokeArr = pokemonData.pokemon;
  var leftCol = pokeArr.slice(0, Math.ceil(pokeArr.length / 2));
  var rightCol = pokeArr.slice(Math.ceil(pokeArr.length / 2));

  return (
    <Container className='d-none d-sm-block'>
      {/* {console.log(pokemonData)}
      {leftCol.map((pokemon, index) => {
        return <WindowCard pokmeon={pokemon} key={index} />;
      })}
      {rightCol.map((pokemon, index) => {
        return <WindowCard pokemon={pokemon} key={index} />;
      })} */}
      {pokemonData.pokemon.map((pokemon, index) => {
        if (index % 2) {
          return (
            <CardRow
              pokemonOne={pokemonData.pokemon[index - 1]}
              pokemonTwo={pokemonData.pokemon[index]}
              key={index}
            />
          );
        }
      })}
      {(function() {
        if (pokemonData.pokemon.length % 2 !== 0) {
          return (
            <CardRow
              pokemonOne={pokemonData.pokemon[pokemonData.pokemon.length - 1]}
              key={pokemonData.pokemon.length - 1}
            />
          );
        }
      })()}
    </Container>
  );
}
