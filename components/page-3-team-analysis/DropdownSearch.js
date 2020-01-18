import { Dropdown, Form } from 'react-bootstrap'
import { useState } from 'react'

export default function DropdownSearch({ all }) {
  const handler = e => setSearch(e.target.value)
  const [search, setSearch] = useState('')
  const list = all.map(({ name }) => name)
  const filtered = search
    ? list.filter(child => child.toLowerCase().startsWith(search.toLowerCase()))
    : list
  return (
    <Dropdown>
      <Dropdown.Toggle>Pokemon</Dropdown.Toggle>
      <Dropdown.Menu className="custom-dropdown">
        <div className="px-2 pb-2 position-sticky">
          <Form.Control placeholder="search" onChange={handler} />
        </div>
        {filtered.map((name, i) => (
          <Dropdown.Item
            key={`dropdown-all-${i}`}
            className="pl-3 hover"
            onSelect={e => console.log(e)}
            eventKey={name}
          >
            <div className="d-inline-block" style={{ fontWeight: 700 }}>
              {i + 1}.
            </div>
            <div className="d-inline-block pl-3">{name}</div>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}
