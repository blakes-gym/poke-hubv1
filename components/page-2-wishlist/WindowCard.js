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
import CollapseData from './CollapseData.js';

export default function WindowCard({ pokemon, allPokemon }) {
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
          <CardGroup>
            <Card className='p-2'>
              <Card.Img
                className='mt-auto mb-auto'
                src={pokemon.wlPoke.sprite}
              />
            </Card>
            <Card>
              <Card.Header>
                <div className='d-flex'>
                  <div>
                    <b>
                      #{pokemon.wlPokeId} {pokemon.wlPoke.name}
                    </b>
                    <br></br>
                    <Badge
                      style={{
                        background: HexByType[pokemon.wlPoke.type1],
                        marginLeft: '2px',
                        margin: '2px'
                      }}
                    >
                      {pokemon.wlPoke.type1}
                    </Badge>
                    <Badge
                      style={{
                        background: HexByType[pokemon.wlPoke.type2],
                        marginLeft: '2px',
                        margin: '2px'
                      }}
                    >
                      {pokemon.wlPoke.type2}
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
                <PokemonStats pokemon={pokemon.wlPoke} />
                {/* <Chevron onClick={handleDropdownClick} className={toggleDrop()} /> */}
              </Card.Body>
            </Card>
          </CardGroup>
          <Card>
            <Accordion.Toggle as={Button} variant='link' eventKey='1'>
              <Chevron />
            </Accordion.Toggle>
            <CollapseData idx='1' pokemon={pokemon} allPokemon={allPokemon} />
            {/* <Accordion.Collapse eventKey='1'>
              <WindowDropdown pokemon={pokemon} />
            </Accordion.Collapse> */}
          </Card>
        </Accordion>
      </div>
    );
  }
}
