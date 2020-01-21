import WindowCard from './WindowCard.js';
import Container from 'react-bootstrap/Container';
import CardRow from './CardRow.js';
import PikaJulian from '../PikaJulian.js';

export default function WL_WindowView({ pokemonData }) {
  if (!pokemonData) {
    return (
      <div className='d-none d-sm-block'>
        <div className='m-auto' style={{ textAlign: 'center' }}>
          <h4>There are no Pokémon in your wishlist!</h4>
          <PikaJulian />
        </div>
      </div>
    );
  } else {
    return (
      <Container className='d-none d-sm-block'>
        {pokemonData.map((pokemon, index) => {
          if (index % 2) {
            return (
              <CardRow
                pokemonOne={pokemonData[index - 1]}
                pokemonTwo={pokemonData[index]}
                key={index}
                allPokemon={pokemonData}
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
                allPokemon={pokemonData}
              />
            );
          }
        })()}
      </Container>
    );
  }
}
