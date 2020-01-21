import { Component } from 'react';
import additionalData from '../../data/dummyData2.js';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { local } from '../../constants';

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

  handleSubmit() {
    // axios.put(local + '/wishlist', { id: this.props.pokemon.id });
  }

  render() {
    return (
      <div className='d-flex flex-column'>
        <div>
          <div className='p-2'>
            <h6 style={{ textAlign: 'center' }}>Nature</h6>
            <form style={{ textAlign: 'center' }}>
              <select
                onChange={this.handleChange}
                className='align-self-center justify-content-center'
              >
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
            <form style={{ textAlign: 'center' }}>
              <select
                onChange={this.handleChange}
                className='align-self-center justify-content-center'
              >
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
        <div style={{ textAlign: 'center' }}>
          <Button
            variant='info'
            onClick={this.handleSubmit}
            className='mt-3 mb-3'
          >
            Update Nature & Item
          </Button>
        </div>
      </div>
    );
  }
}

export default NatureAndItem;
