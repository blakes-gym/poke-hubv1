import { Dropdown, Form } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'
import { server } from '../../constants'

export default function DropdownSearch({ data, update, teamNumber, teamId }) {
  const handler = e => setSearch(e.target.value)
  const [search, setSearch] = useState('')
  const list = data
  const filtered = search
    ? list.filter(child =>
        child.name.toLowerCase().startsWith(search.toLowerCase())
      )
    : list
  return (
    <Dropdown>
      <Dropdown.Toggle>Add a Pokemon</Dropdown.Toggle>
      <Dropdown.Menu flip className="custom-dropdown">
        <div className="px-2 pb-2 position-sticky">
          <Form.Control placeholder="search" onChange={handler} />
        </div>
        {filtered.map(({ name, id }, i) => (
          <Dropdown.Item
            key={`dropdown-all-${i}`}
            className="pl-3 hover"
            onSelect={id => update({ [`p${teamNumber}Id`]: id, id: teamId })}
            eventKey={id}
          >
            <div className="d-inline-block" style={{ fontWeight: 700 }}>
              {id}.
            </div>
            <div className="d-inline-block pl-3">{name}</div>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}
