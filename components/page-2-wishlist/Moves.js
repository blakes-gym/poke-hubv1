import { Component } from 'react';
import moveData from '../../data/dummyData2.js';
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
      <div>
        {Object.keys(this.state).map((moveNo, index) => {
          return (
            <div key={index}>
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
              <div>Dmg:</div>
              <div>PP:</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Moves;
