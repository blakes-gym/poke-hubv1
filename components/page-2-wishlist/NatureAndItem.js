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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log(e.target.name);
    console.log(e.target.value);
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => console.log(this.state)
    );
  }

  handleSubmit() {
    axios
      .put(local + '/wishlist', {
        id: this.props.pokemon.id,
        nature: this.state.nature,
        item: this.state.item
      })
      .then(() => alert('Updated nature and item!'))
      .catch(err => console.log('err in PUT', err));
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
                name='nature'
                value={this.state.nature}
              >
                {additionalData.natures.map((nature, index) => {
                  return <option key={index}>{nature}</option>;
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
                name='item'
                value={this.state.item}
              >
                {additionalData.items.map((item, index) => {
                  return (
                    <option value={item} key={index}>
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
