import Matchup from '../components/page-3-team-analysis/Matchup'
import './team-analysis.scss'
import { Fragment } from 'react'
import TeamMember from '../components/page-3-team-analysis/TeamMember'
import { server } from '../constants'
import fetch from 'isomorphic-unfetch'

export default function TeamAnalysis({ pokemon }) {
  return (
    <>
      <div className="border-top" />
      {pokemon.map((pokemon, i) => (
        <Fragment key={`team-member-${i}`}>
          {!!pokemon ? <TeamMember {...pokemon} /> : 'NO POKEMONS FOR YOU!!!'}
          <div className="border-top" />
        </Fragment>
      ))}
      <div>Hello!</div>
      <Matchup team={pokemon} />
    </>
  )
}

TeamAnalysis.getInitialProps = async function() {
  const res = await fetch(server + '/team?name=best&include=true')
  const data = await res.json()
  const { name, p1, p2, p3, p4, p5, p6 } = data[0]
  const parsed = {
    name,
    pokemon: [p1, p2, p3, p4, p5, p6]
  }
  return { ...parsed }
}
