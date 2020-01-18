import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import HexByType from '../../utils/hexData';
import PokemonStats from './PokemonStats.js';

export default function WindowCard({ pokemon }) {
  const [caught, setCaught] = useState(false);
  function handleClick() {
    setCaught(!caught);
    // axios update request for caught bool
  }

  function toggleCaught() {
    return caught ? 'isCaught' : 'notCaught';
  }

  return (
    <Accordion>
      <CardGroup className='p-2'>
        <Card className='p-2'>
          <Card.Img className='mt-auto mb-auto' src={pokemon.sprite} />
        </Card>
        <Card>
          <Card.Header>
            <div className='d-flex'>
              <div>
                <b>
                  #{pokemon.id} {pokemon.name}
                </b>
                <br></br>
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
          <Card.Body>
            <PokemonStats pokemon={pokemon} />
          </Card.Body>
        </Card>
      </CardGroup>
    </Accordion>
  );
}
