import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import data from '../../dummyData.js';
import HexByType from '../../hexData.js';
export default function CurrentTeam () {

  return (
    <div className="pokeTeam">
      {data.map((pokemon, idx) => {
        return (
      <Card style={{ width: '10rem', marginBottom: '1rem' }} key={idx}>
      <Card.Body>
      <Card.Img variant="top" src={pokemon.Sprite}/>
      <Card.Title>{pokemon.Name}</Card.Title>
          {
            pokemon.Type.map((type, idx) => {
              return (
                <Badge style={{ background: HexByType[type] }} key={idx}>{type}</Badge>
              )
            })
          }
      <Card.Text>
      </Card.Text>
    </Card.Body>
    </Card>
        )
      })}

    </div>
  )
}