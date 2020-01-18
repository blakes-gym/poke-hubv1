import Card from 'react-bootstrap/Card'

export default function Stats ({pokemon}) {
  return (
    <Card className="statsContainer">
      <Card.Header className="topHalf" style={{background: 'transparent', margin: '-0.25rem'}}>STATS</Card.Header>
      <table style={{fontSize: '0.7rem', margin: '5px'}}>
        <tbody>
          <tr>
            <th className="HPcolor">HP</th>
            <td className="HPcolor">{pokemon.hp}</td>
            <th className="SpAttackcolor">SP. ATK</th>
            <td className="SpAttackcolor">{pokemon.spatk}</td>
          </tr>
          <tr>
            <th className="Attackcolor">ATK</th>
            <td className="Attackcolor">{pokemon.atk}</td>
            <th className="SpDefensecolor">SP. DEF</th>
            <td className="SpDefensecolor">{pokemon.spdef}</td>
          </tr>
          <tr>
            <th className="Defensecolor">DEF</th>
            <td className="Defensecolor">{pokemon.def}</td>
            <th className="Speedcolor">Speed</th>
            <td className="Speedcolor">{pokemon.speed}</td>
          </tr>
          <tr>
            <th className="Totalcolor">TOTAL</th>
            <td className="Totalcolor">{pokemon.total}</td>
          </tr>
        </tbody>
      </table>
    </Card>
  )
};