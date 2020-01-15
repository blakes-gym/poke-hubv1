import StatList from './StatList.js';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

function TeamButton() {
  const [onTeam, teamStatus] = useState(false);
  const handleClick = () => teamStatus(!onTeam);
  if (!onTeam) {
    return (
      <Button variant='primary' onClick={handleClick}>
        Add To Team
      </Button>
    );
  } else {
    return (
      <Button variant='success' onClick={handleClick}>
        ✔️Added!
      </Button>
    );
  }
}

export default function PokemonRow({ pokemon }) {
  return (
    <>
      <Card>
        <Card.Img variant='top' src={pokemon.Sprite} />
        <Card.Body>
          <Card.Title>
            #{pokemon.DexNo} {pokemon.Name}
          </Card.Title>
          <StatList stats={pokemon.Stats} />
          <br></br>
          <TeamButton />
        </Card.Body>
      </Card>
    </>
  );
}
