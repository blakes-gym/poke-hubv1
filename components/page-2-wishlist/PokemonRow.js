import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import PokemonBanner from './PokemonBanner.js';
import CollapseData from './CollapseData.js';
import Button from 'react-bootstrap/Button';

export default function PokemonRow({ pokemonData }) {
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
              <Button variant='danger' block>
                Remove {pokemon.name}
              </Button>
            </Card>
          );
        })}
      </Accordion>
    </div>
  );
}
