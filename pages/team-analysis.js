import Matchup from '../components/page-3-team-analysis/Matchup'
import './team-analysis.scss'
import { Fragment } from 'react'
import TeamMember from '../components/page-3-team-analysis/TeamMember'
import { server } from '../constants'
import fetch from 'isomorphic-unfetch'
import DropdownSearch from '../components/page-3-team-analysis/DropdownSearch'
import { useState } from 'react'
import axios from 'axios'

export default function TeamAnalysis({ pokemon, names, id }) {
  const [team, setTeam] = useState(pokemon)
  const update = info =>
    axios
      .put(server + '/team', info)
      .then(() => axios.get(server + `/team?id=${id}&include=true`))
      .then(({ data }) =>
        setTeam([
          data[0].p1,
          data[0].p2,
          data[0].p3,
          data[0].p4,
          data[0].p5,
          data[0].p6
        ])
      )
      .catch(err => console.error(err))

  return (
    <>
      <div className="border-top" />
      {team.map((member, i) => (
        <Fragment key={`team-member-${i}`}>
          {!!member ? (
            <TeamMember {...member} id={id} number={i + 1} update={update} />
          ) : (
            <div
              className="p-3 bg-light d-flex justify-content-center"
              style={{ height: 74 }}
            >
              <DropdownSearch
                data={names}
                update={update}
                teamNumber={i + 1}
                teamId={id}
              />
            </div>
          )}
          <div className="border-top" />
        </Fragment>
      ))}
      <Matchup team={team} />
    </>
  )
}

TeamAnalysis.getInitialProps = async function() {
  const res = await fetch(server + '/team?id=1&include=true')
  const data = await res.json()
  const { name, p1, p2, p3, p4, p5, p6, id } = data[0]
  const parsed = {
    id,
    name,
    pokemon: [p1, p2, p3, p4, p5, p6]
  }

  const res2 = await fetch(server + '/pokemon/all')
  const data2 = await res2.json()
  const names = data2.map(({ name, id }) => {
    return {
      name,
      id
    }
  })
  return { ...parsed, names }
}
