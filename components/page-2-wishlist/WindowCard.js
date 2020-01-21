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
import axios from 'axios';
import { local } from '../../constants';
import { Component } from 'react';

export default class WindowCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caught: false
    };
    this.handleCaught = this.handleCaught.bind(this);
  }

  componentDidMount() {
    if (this.props.pokemon.caught === true) {
      this.setState({ caught: true });
    }
  }

  toggleCaught() {
    console.log('hello from toggleCaught');
    return this.state.caught ? 'isCaught' : 'notCaught';
  }

  handleCaught() {
    console.log(this.state.caught);
    axios
      .put(local + '/wishlist', {
        id: this.props.pokemon.id,
        caught: !this.state.caught
      })
      .then(() => {
        console.log('updated bool!');
        this.setState({ caught: !this.state.caught });
      });
  }

  render() {
    return (
      <div className='p-2'>
        <Accordion>
          <CardGroup>
            <Card className='p-2'>
              <Card.Img
                className='mt-auto mb-auto'
                src={this.props.pokemon.wlPoke.sprite}
              />
            </Card>
            <Card>
              <Card.Header>
                <div className='d-flex'>
                  <div>
                    <b>
                      #{this.props.pokemon.wlPokeId}{' '}
                      {this.props.pokemon.wlPoke.name}
                    </b>
                    <br></br>
                    <Badge
                      style={{
                        background: HexByType[this.props.pokemon.wlPoke.type1],
                        marginLeft: '2px',
                        margin: '2px'
                      }}
                    >
                      {this.props.pokemon.wlPoke.type1}
                    </Badge>
                    <Badge
                      style={{
                        background: HexByType[this.props.pokemon.wlPoke.type2],
                        marginLeft: '2px',
                        margin: '2px'
                      }}
                    >
                      {this.props.pokemon.wlPoke.type2}
                    </Badge>
                  </div>
                  <img
                    onClick={this.handleCaught}
                    className={[
                      'ml-auto',
                      'mt-auto',
                      'mb-auto',
                      this.toggleCaught()
                    ].join(' ')}
                    src={images.pokeball}
                    width='20'
                    height='20'
                    style={{ cursor: 'pointer' }}
                  ></img>
                </div>
              </Card.Header>
              <Card.Body className='pl-2 pr-2 pb-2'>
                <PokemonStats pokemon={this.props.pokemon.wlPoke} />
                {/* <Chevron onClick={handleDropdownClick} className={toggleDrop()} /> */}
              </Card.Body>
            </Card>
          </CardGroup>
          <Card>
            <Accordion.Toggle as={Button} variant='link' eventKey='1'>
              <Chevron />
            </Accordion.Toggle>
            <CollapseData
              idx='1'
              pokemon={this.props.pokemon}
              allPokemon={this.props.allPokemon}
            />
            {/* <Accordion.Collapse eventKey='1'>
              <WindowDropdown pokemon={pokemon} />
            </Accordion.Collapse> */}
          </Card>
        </Accordion>
      </div>
    );
  }
}
