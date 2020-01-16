import Badge from 'react-bootstrap/Badge';
import HexByType from '../../hexData.js';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

export default function StatsCard({ pokemon, idx }) {
  return (
    <Accordion.Toggle as={Card.Header} eventKey={`${idx}`}>
      <div className='accordianList'>
        <div
          style={{
            backgroundImage: `url(${pokemon.Sprite})`,
            backgroundSize: 'cover',
            zIndex: '1'
          }}
          className='miniPokemonSprite'
        ></div>
        <div className='pokemonTeamBackground'></div>
        <div>{pokemon.Name}</div>
        {pokemon.Type.map((type, idx) => {
          return (
            <Badge
              style={{
                background: HexByType[type],
                marginLeft: '2px',
                margin: '2px'
              }}
              key={idx}
            >
              {type}
            </Badge>
          );
        })}
      </div>
    </Accordion.Toggle>
  );
}
