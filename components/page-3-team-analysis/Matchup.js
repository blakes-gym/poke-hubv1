import { Table } from 'react-bootstrap'

import colors from '../../utils/hexData'

import matchups from '../../data/typeMatchups'

export default function Matchup({ type, types }) {
  return (
    <div className="my-3">
      <Table
        size="sm"
        className="text-center mx-auto shadow"
        bordered
        style={{ fontSize: 10 }}
        style={{ tableLayout: 'fixed', fontSize: 12, maxWidth: 300 }}
      >
        <thead>
          <tr>
            <th className="bg-secondary"></th>
            <th colSpan="2">Offense</th>
            <th colSpan="2">Defense</th>
          </tr>
          <tr>
            <th>Type</th>
            <th>Stronk</th>
            <th>Wik</th>
            <th>Stronk</th>
            <th>Wik</th>
          </tr>
        </thead>
        <tbody>
          {matchups.map(({ type }) => (
            <tr>
              <th style={{ background: colors[type] + '8' }}>
                <div>{type}</div>
              </th>
              <td>4</td>
              <td>4</td>
              <td>4</td>
              <td>4</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
