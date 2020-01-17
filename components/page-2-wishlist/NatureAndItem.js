import { Component } from 'react';
import additionalData from '../../data/dummyData2.js';

class NatureAndItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nature: null,
      item: null
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className='d-flex'>
        <div className='p-2'>
          <h6 style={{ textAlign: 'center' }}>Nature</h6>
          <form>
            <select onChange={this.handleChange}>
              {additionalData.natures.map((nature, index) => {
                return (
                  <option name='nature' key={index}>
                    {nature}
                  </option>
                );
              })}
            </select>
          </form>
        </div>
        <div className='p-2'>
          <h6 style={{ textAlign: 'center' }}>Held Item</h6>
          <form>
            <select onChange={this.handleChange}>
              {additionalData.items.map((item, index) => {
                return (
                  <option name='item' key={index}>
                    {item}
                  </option>
                );
              })}
            </select>
          </form>
        </div>
      </div>
    );
  }
}

export default NatureAndItem;
