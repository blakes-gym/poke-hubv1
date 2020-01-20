import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import HexByType from '../../utils/hexData';
import PokemonStats from './PokemonStats.js';
import images from '../../utils/imageUrls.js';
import Chevron from '../Chevron.js';
import Button from 'react-bootstrap/Button';
import WindowDropdown from './WindowDropdown.js';

export default function WindowCard({ pokemon }) {
  const [caught, setCaught] = useState(false);
  const [drop, setDrop] = useState(false);

  function handlePokeClick() {
    setCaught(!caught);
    // axios update request for caught bool
  }

  function toggleCaught() {
    return caught ? 'isCaught' : 'notCaught';
  }

  function toggleDrop() {
    return drop ? 'drop' : 'notDrop';
  }

  function handleDropdownClick() {
    setDrop(!drop);
  }

  if (pokemon) {
    return (
      <div className='p-2'>
        <Accordion>
          {console.log(pokemon)}
          <CardGroup>
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
                    onClick={handlePokeClick}
                    className={[
                      'ml-auto',
                      'mt-auto',
                      'mb-auto',
                      toggleCaught()
                    ].join(' ')}
                    src={images.pokeball}
                    width='20'
                    height='20'
                    style={{ cursor: 'pointer' }}
                  ></img>
                </div>
              </Card.Header>
              <Card.Body className='pl-2 pr-2 pb-2'>
                <PokemonStats pokemon={pokemon} />
                {/* <Chevron onClick={handleDropdownClick} className={toggleDrop()} /> */}
              </Card.Body>
            </Card>
          </CardGroup>
          <Card>
            <Accordion.Toggle as={Button} variant='link' eventKey='1'>
              <Chevron />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='1'>
              <WindowDropdown pokemon={pokemon} />
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}
