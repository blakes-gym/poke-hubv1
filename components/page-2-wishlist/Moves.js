import { Component } from 'react';
import moveData from '../../data/dummyData2.js';
import NatureAndItem from './NatureAndItem.js';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { local } from '../../constants';

class Moves extends Component {
  constructor(props) {
    super(props);
    this.state = {
      move1: 'Select a move',
      move2: 'Select a move',
      move3: 'Select a move',
      move4: 'Select a move'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit() {
    axios
      .put(local + '/wishlist', {
        id: this.props.pokemon.id,
        move1: this.state.move1,
        move2: this.state.move2,
        move3: this.state.move3,
        move4: this.state.move4
      })
      .then(() => {
        alert('Updated moves!');
        console.log(this.state);
      });
  }

  render() {
    return (
      <div className='d-flex flex-column'>
        <h5 className='align-self-center'>Move Set</h5>
        {Object.keys(this.state).map((moveNo, index) => {
          return (
            <div key={index} className='p-2 align-self-center'>
              <form>
                <select
                  value={this.state[`${moveNo}`]}
                  name={moveNo}
                  onChange={this.handleChange}
                >
                  {moveData.moves.map((moveDetails, index) => {
                    return (
                      <option value={moveDetails.move} key={index}>
                        {moveDetails.move}
                      </option>
                    );
                  })}
                </select>
              </form>
            </div>
          );
        })}
        <Button
          variant='info'
          onClick={this.handleSubmit}
          className='mt-3 mb-3'
        >
          Update Moves
        </Button>
        <div className='align-self-center'>
          <NatureAndItem
            handleChange={this.handleChange}
            pokemon={this.props.pokemon}
          />
        </div>
      </div>
    );
  }
}

export default Moves;
