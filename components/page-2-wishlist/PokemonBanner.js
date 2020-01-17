import Badge from 'react-bootstrap/Badge';
import HexByType from '../../utils/hexData.js';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Plus from '../Plus.js';

export default function PokemonBanner({ pokemon, idx }) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);
  return (
    <div>
      <Accordion.Toggle as={Card.Header} eventKey={`${idx}`} onClick={toggle}>
        <div className='accordianList'>
          <div className='d-flex align-items-center'>
            <div
              style={{
                backgroundImage: `url(${pokemon.sprite})`,
                backgroundSize: 'cover',
                marginRight: '12px',
                zIndex: '1'
              }}
              className='miniPokemonSprite'
            ></div>
            <div style={{ margin: '5px' }}>{pokemon.name}</div>
            <Badge
              style={{
                background: HexByType[pokemon.type1],
                marginLeft: '2px',
                margin: '2px'
              }}
            >
              {pokemon.type1}
            </Badge>
            <Badge
              style={{
                background: HexByType[pokemon.type2],
                marginLeft: '2px',
                margin: '2px'
              }}
            >
              {pokemon.type2}
            </Badge>
          </div>
          <div className={'ml-auto align-item-center'}>
            <Plus rotate={open} />
          </div>
        </div>
      </Accordion.Toggle>
    </div>
  );
}
