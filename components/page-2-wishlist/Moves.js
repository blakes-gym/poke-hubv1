import { Component } from 'react';
import moveData from '../../data/dummyData2.js';
import NatureAndItem from './NatureAndItem.js';

class Moves extends Component {
  constructor(props) {
    super(props);
    this.state = {
      move1: null,
      move2: null,
      move3: null,
      move4: null
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      console.log(this.state)
    );
  }

  render() {
    return (
      <div className='d-flex flex-column'>
        <h5 className='align-self-center'>Move Set</h5>
        {Object.keys(this.state).map((moveNo, index) => {
          return (
            <div key={index} className='p-2 align-self-center'>
              <form>
                <select name={moveNo} onChange={this.handleChange}>
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
        <div className='align-self-center'>
          <NatureAndItem />
        </div>
      </div>
    );
  }
}

export default Moves;
