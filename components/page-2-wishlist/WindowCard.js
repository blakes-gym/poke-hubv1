import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import HexByType from '../../utils/hexData';
import { urlObjectKeys } from 'next/dist/next-server/lib/utils';

export default function WindowCard({ pokemon }) {
  const [caught, setCaught] = useState(false);
  function handleClick() {
    setCaught(!caught);
  }

  function toggleCaught() {
    return caught ? 'isCaught' : 'notCaught';
  }

  return (
    <Accordion>
      <CardGroup className='p-2'>
        <Card className='p-2'>
          <Card.Img src={pokemon.sprite} />
          {/* <Accordion.Toggle>Click me for more info!</Accordion.Toggle> */}
          {/* <div className='d-flex align-items-center'>
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
          </div> */}
        </Card>
        <Card>
          <Card.Header>
            <div className='d-flex'>
              <b>
                #{pokemon.id} {pokemon.name}
              </b>
              <img
                onClick={handleClick}
                className={[
                  'ml-auto',
                  'mt-auto',
                  'mb-auto',
                  toggleCaught()
                ].join(' ')}
                src='https://image.flaticon.com/icons/svg/743/743977.svg'
                width='20'
                height='20'
                style={{ cursor: 'pointer' }}
              ></img>
            </div>
          </Card.Header>
        </Card>
      </CardGroup>
    </Accordion>
  );
}
