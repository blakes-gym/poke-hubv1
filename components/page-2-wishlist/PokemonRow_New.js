import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import PokemonBanner from './PokemonBanner.js';
import CollapseData from './CollapseData.js';

export default function PokemonRow_New({ pokemonData }) {
  return (
    <div>
      <Accordion>
        {pokemonData.pokemon.map((pokemon, idx) => {
          return (
            <Card key={idx}>
              <PokemonBanner idx={idx} pokemon={pokemon} />
              <CollapseData
                idx={idx}
                pokemon={pokemon}
                allPokemon={pokemonData}
              />
            </Card>
          );
        })}
      </Accordion>
    </div>
  );
}
