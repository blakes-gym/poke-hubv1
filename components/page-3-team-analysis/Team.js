import { Fragment } from 'react'
import TeamMember from './TeamMember'

export default function Team({ team }) {
  return team.map((pokemon, i) => (
    <Fragment key={`team-member-${i}`}>
      <TeamMember {...pokemon} />
      <div className="border-top" />
    </Fragment>
  ))
}
