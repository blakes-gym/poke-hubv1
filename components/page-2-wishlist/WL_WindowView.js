import WindowCard from './WindowCard.js';
import Container from 'react-bootstrap/Container';
import CardRow from './CardRow.js';

export default function WL_WindowView({ pokemonData }) {
  var leftCol = pokemonData.slice(0, Math.ceil(pokemonData.length / 2));
  var rightCol = pokemonData.slice(Math.ceil(pokemonData.length / 2));

  return (
    <Container className='d-none d-sm-block'>
      {/* {console.log(pokemonData)}
      {leftCol.map((pokemon, index) => {
        return <WindowCard pokmeon={pokemon} key={index} />;
      })}
      {rightCol.map((pokemon, index) => {
        return <WindowCard pokemon={pokemon} key={index} />;
      })} */}
      {pokemonData.map((pokemon, index) => {
        if (index % 2) {
          return (
            <CardRow
              pokemonOne={pokemonData[index - 1]}
              pokemonTwo={pokemonData[index]}
              key={index}
            />
          );
        }
      })}
      {(function() {
        if (pokemonData.length % 2 !== 0) {
          return (
            <CardRow
              pokemonOne={pokemonData[pokemonData.length - 1]}
              key={pokemonData.length - 1}
            />
          );
        }
      })()}
    </Container>
  );
}
