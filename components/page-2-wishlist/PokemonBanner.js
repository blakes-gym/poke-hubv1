import Badge from 'react-bootstrap/Badge';
import HexByType from '../../utils/hexData.js';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import icons from '../../utils/imageUrls.js';

function TeamButton() {
  const [onTeam, teamStatus] = useState(false);
  const handleTeamClick = () => teamStatus(!onTeam);
  if (!onTeam) {
    return (
      <img
        className='add-button'
        onClick={handleTeamClick}
        src={icons.plus}
        width='20'
        height='20'
      ></img>
    );
  } else {
    return (
      <img
        className='add-button'
        onClick={handleTeamClick}
        src={icons.check}
        width='20'
        height='20'
      ></img>
    );
  }
}

export default function PokemonBanner({ pokemon, idx }) {
  return (
    <div>
      <Accordion.Toggle as={Card.Header} eventKey={`${idx}`}>
        {/* <div className='d-flex align-items-center'> */}
        <div className='accordianList'>
          <div className='d-flex align-items-center'>
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
                    background: HexByType[type.toLowerCase()],
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
          <div className={'ml-auto align-item-center'}>
            <TeamButton />
          </div>
        </div>
        {/* </div> */}
      </Accordion.Toggle>
    </div>
  );
}
