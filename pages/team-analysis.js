import './team-analysis.scss'

import { Fragment } from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

import TeamMember from '../components/page-3-team-analysis/TeamMember'

const GET_POKEMON = gql`
  {
    pokemon(id: [53, 94, 149, 889, 2, 890]) {
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

  return (
    <div>
      <div className="border-top" />
      {data.pokemon.map((pokemon, i) => (
        <Fragment key={`team-member-${i}`}>
          <TeamMember {...pokemon} />
          <div className="border-top" />
        </Fragment>
      ))}
      <h1>heyo</h1>
      <h1>heyo</h1>
      <h1>heyo</h1>
      <h1>heyo</h1>
      <h1>heyo</h1>
      <h1>heyo</h1>
      <h1>heyo</h1>
      <h1>heyo</h1>
    </div>
  )
}
