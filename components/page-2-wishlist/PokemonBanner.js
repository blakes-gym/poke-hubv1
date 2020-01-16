import Badge from 'react-bootstrap/Badge';
import HexByType from '../../hexData.js';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function TeamButton() {
  const [onTeam, teamStatus] = useState(false);
  const handleTeamClick = () => teamStatus(!onTeam);
  if (!onTeam) {
    return (
      <Button variant='primary' onClick={handleTeamClick}>
        Add To Team
      </Button>
    );
  } else {
    return (
      <Button variant='success' onClick={handleTeamClick}>
        ✔️Added!
      </Button>
    );
  }
}

export default function PokemonBanner({ pokemon, idx }) {
  return (
    <div>
      <Accordion.Toggle as={Card.Header} eventKey={`${idx}`}>
        {/* <div className='d-flex align-items-center'> */}
        <div className='accordianList'>
          <div
            style={{
              backgroundImage: `url(${pokemon.Sprite})`,
              backgroundSize: 'cover',
              zIndex: '1'
            }}
            className='miniPokemonSprite'
          ></div>
          <div>{pokemon.Name}</div>
          {pokemon.Type.map((type, idx) => {
            return (
              <Badge
                style={{
                  background: HexByType[type],
                  marginLeft: '2px',
                  margin: '2px'
                }}
                key={idx}
              >
                {type}
              </Badge>
            );
          })}
        </div>
        {/* </div> */}
      </Accordion.Toggle>
    </div>
  );
}
