import WindowCard from './WindowCard.js';
import Container from 'react-bootstrap/Container';
import CardRow from './CardRow.js';

export default function WL_WindowView({ pokemonData }) {
  return (
    <Container className='d-none d-sm-block'>
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
    </Container>
  );
}
