import { Fragment } from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

import TeamMember from '../components/page-3-team-analysis/TeamMember'
import Matchup from '../components/page-3-team-analysis/Matchup'

import './team-analysis.scss'

const GET_POKEMON = gql`
  {
    pokemon(id: [6, 842, 866, 448, 849, 834]) {
      name
      sprite
      icon
      type1
      type2
      hp
      atk
      def
      spatk
      spdef
      speed
      total
    }
  }
`

export default function TeamAnalysis() {
  const { loading, err, data } = useQuery(GET_POKEMON)
  if (loading) return <div>loading</div>
  if (err) return <div>error</div>
  const types1 = data.pokemon.map(({ type1 }) => type1).filter(type => !!type)
  const types2 = data.pokemon.map(({ type2 }) => type2).filter(type => !!type)
  const types = [...types1, ...types2]

  return (
    <div>
      <div className="border-top" />
      {data.pokemon.map((pokemon, i) => (
        <Fragment key={`team-member-${i}`}>
          <TeamMember {...pokemon} />
          <div className="border-top" />
        </Fragment>
      ))}
      <Matchup types={types} />
    </div>
  )
}
