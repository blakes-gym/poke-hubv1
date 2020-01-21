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
        console.log(data);
        this.setState({ wishlist: data });
      });
    // axios
    //   .get(local + '/wishlist')
    //   .then(({ data }) => {
    //     this.setState({ wishlist: data });
    //   })
    //   .then(() => console.log('AFTER', this.state))
    //   .catch(err => console.log('err in GET', err));
  }

  handleRemove(e) {
    // remove pokemon from wishlist on click
    // update the database to false then re-render list of pokemon
    console.log('BEFORE', this.state);
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

// export default function CollapseData({ allPokemon, pokemon, idx }) {
//   const [wishlist, setCurrWishlist] = useState(allPokemon);

//   function getWishlist() {
//     axios
//       .get(local + '/wishlist')
//       .then(data => setCurrWishlist(data))
//       .then(() => console.log(`Here's your current wishlist: ${wishlist}`));
//   }

//   function handleRemove(pokemonObj) {
//     // remove pokemon from wishlist on click
//     // update the database to false then re-render list of pokemon
//     return function(e) {
//       console.log('remove ', pokemonObj);
//       axios
//         .delete(local + `/wishlist/${pokemonObj.id}`)
//         .then(() => getWishlist())
//         .catch(err => console.log('err in DELETE', err));
//     };
//   }

//   return (
//     <Accordion.Collapse eventKey={`${idx}`}>
//       <Card.Body>
//         <div className='dataContainer'>
//           <PokemonStats pokemon={pokemon.wlPoke}></PokemonStats>
//           <StatsGraph pokemon={pokemon.wlPoke}></StatsGraph>
//           <Moves allPokemon={allPokemon} />
//         </div>
//         <Button
//           variant='danger'
//           block
//           onClick={handleRemove(pokemon)}
//           name={pokemon.wlPoke.name}
//         >
//           Remove {pokemon.wlPoke.name}
//         </Button>
//       </Card.Body>
//     </Accordion.Collapse>
//   );
// }
