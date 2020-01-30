import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import PokemonStats from './PokemonStats.js';
import StatsGraph from './StatsGraph.js';
import Moves from './Moves.js';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Component } from 'react';
import { local } from '../../constants';
import fetch from 'isomorphic-unfetch';

class CollapseData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wishlist: this.props.allPokemon
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.getWishlist = this.getWishlist.bind(this);
  }

  getWishlist() {
    let res = fetch(local + '/wishlist')
      .then(res => res.json())
      .then(data => {
        this.setState({ wishlist: data });
      });
  }

  handleRemove(e) {
    // remove pokemon from wishlist on click
    // update the database to false then re-render list of pokemon
    axios
      .delete(local + `/wishlist/${e.target.name}`)
      .then(() =>
        alert(`Removed from wishlist. Please refresh to see your changes!`)
      )
      .then(() => this.getWishlist())
      .catch(err => console.log('err in DELETE', err));
  }

  render() {
    return (
      <Accordion.Collapse eventKey={`${this.props.idx}`}>
        <Card.Body className='d-flex'>
          <div className='dataContainer'>
            <PokemonStats pokemon={this.props.pokemon.wlPoke}></PokemonStats>
            <StatsGraph pokemon={this.props.pokemon.wlPoke}></StatsGraph>
            <Moves pokemon={this.props.pokemon} />
            <br></br>
            <Button
              variant='danger'
              onClick={this.handleRemove}
              name={this.props.pokemon.id}
            >
              Remove {this.props.pokemon.wlPoke.name}
            </Button>
          </div>
        </Card.Body>
      </Accordion.Collapse>
    );
  }
}

export default CollapseData;
