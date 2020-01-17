import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import Matchup from '../components/page-3-team-analysis/Matchup'
import './team-analysis.scss'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import Team from '../components/page-3-team-analysis/Team'

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

  const { pokemon } = data

  return (
    <div>
      <div className="border-top" />
      {/* <div className="my-5">
        <DropdownButton title="Teams">
          <Dropdown.Item>Heyo</Dropdown.Item>
        </DropdownButton>
      </div> */}
      <Team team={pokemon} />
      <Matchup team={pokemon} />
    </div>
  )
}
