import Badge from 'react-bootstrap/Badge';
import HexByType from '../../utils/hexData.js';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { Component } from 'react';
import Plus from '../Plus.js';
import images from '../../utils/imageUrls';
import axios from 'axios';
import { local } from '../../constants';

export default class PokemonBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caught: false,
      open: false
    };
    this.toggleOpen = this.toggleOpen.bind(this);
    this.toggleCaught = this.toggleCaught.bind(this);
    this.handleCaught = this.handleCaught.bind(this);
  }

  componentDidMount() {
    console.log(this.props.pokemon);
    if (this.props.pokemon.caught === true) {
      this.setState({ caught: true });
    }
  }

  toggleOpen() {
    this.setState({ open: !this.state.open });
  }

  toggleCaught() {
    return this.state.caught ? 'isCaught' : 'notCaught';
  }

  handleCaught() {
    console.log(this.state.caught);
    axios
      .put(local + '/wishlist', {
        id: this.props.pokemon.wlPoke.id,
        caught: !this.state.caught
      })
      .then(() => {
        this.setState({ caught: !this.state.caught });
      });
  }

  render() {
    return (
      <div>
        <Accordion.Toggle
          as={Card.Header}
          eventKey={`${this.props.idx}`}
          onClick={this.toggleOpen}
        >
          <div className='accordianList'>
            <div className='d-flex align-items-center'>
              <div className='pr-2'>
                <img
                  onClick={this.handleCaught}
                  className={[
                    'mr-auto',
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
              <div
                style={{
                  backgroundImage: `url(${this.props.pokemon.wlPoke.sprite})`,
                  backgroundSize: 'cover',
                  marginRight: '12px',
                  zIndex: '1'
                }}
                className='miniPokemonSprite'
              ></div>
              <div style={{ margin: '5px' }}>
                {this.props.pokemon.wlPoke.name}
              </div>
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
            <div className={'ml-auto align-item-center'}>
              <Plus rotate={this.state.open} />
            </div>
          </div>
        </Accordion.Toggle>
      </div>
    );
  }
}
