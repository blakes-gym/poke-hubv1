import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const test = gql`
  {
    pokemon(id: [220]) {
      name
    }
  }
`



export default function Test() {
  const { loading, err, data } = useQuery(test)

  if (loading) return <div>Loading. . .</div>
  if (err) return <div>ERROR</div>
  return <div>this is a test: {data.pokemon[0].name}</div>
}
