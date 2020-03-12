import { Table } from 'react-bootstrap'

import colors from '../../utils/hexData'
import matchups from '../../data/typeMatchups2'
import allTypes from '../../data/types'

export default function Matchup(props) {
  const team = props.team.filter(pokemon => !!pokemon)
  const types1 = team.map(({ type1 }) => type1).filter(type => !!type)
  const types2 = team.map(({ type2 }) => type2).filter(type => !!type)
  const types = [...types1, ...types2]
  return (
    <div className="mt-5 pb-5">
      <Table
        size="sm"
        className="text-center mx-auto shadow"
        bordered
        style={{ fontSize: 10 }}
        style={{ tableLayout: 'fixed', fontSize: 12, maxWidth: 300 }}
      >
        <thead>
          <tr>
            <th className="bg-light"></th>
            <th colSpan="2">Offense</th>
            <th colSpan="2">Defense</th>
          </tr>
          <tr>
            <th>Type</th>
            <th>Strong</th>
            <th>Weak</th>
            <th>Strong</th>
            <th>Weak</th>
          </tr>
        </thead>
        <tbody>
          {allTypes.map((type, i) => (
            <tr key={`matchup-type-${i}`}>
              <th style={{ background: colors[type] + 'c', fontSize: 9 }}>
                {type.toUpperCase()}
              </th>
              {['os', 'ow', 'ds', 'dw'].map(check => (
                <Analysis
                  type={type}
                  types={types}
                  check={check}
                  key={`${type}-${check}`}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

function Analysis({ type, types, check }) {
  let count = 0
  for (const type2 of types) {
    const matchup = matchups[type2]
    if (matchup[check].includes(type)) count++
  }
  const classNames = []
  if (['os', 'ds'].includes(check) && count > 0) classNames.push('text-success')
  else if (['ow', 'dw'].includes(check) && count > 0)
    classNames.push('text-danger')
  else classNames.push('text-muted')

  return (
    <td
      className={classNames.join(' ')}
      style={count > 0 ? { fontWeight: 900, fontSize: 14 } : {}}
    >
      {count}
    </td>
  )
}
