import { useState } from 'react'

import Gradient from '../Gradient'
import { Collapse } from 'react-bootstrap'

export default function TeamMember({
  name,
  sprite,
  type1,
  type2,
  atk,
  def,
  spatk,
  spdef,
  speed,
  total
}) {
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen(!open)
  return (
    <>
      <div className="d-flex align-items-center" onClick={toggle}>
        <Gradient
          type1={type1}
          type2={type2}
          className="p-1 mr-2 rounded border shadow-sm m-1"
        >
          <div className="bg-white p-1 border" style={{ borderRadius: '50%' }}>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ width: 46, height: 46 }}
            >
              <img src={sprite} style={{ width: 40, height: 'auto' }} />
            </div>
          </div>
        </Gradient>
        <div
          style={{
            color: 'black',
            fontSize: '1.3rem'
          }}
        >
          {name}
        </div>
        <div className="ml-auto" style={{ marginRight: 12 }}>
          <div
            style={{ fontSize: 24 }}
            className="text-muted d-flex justify-content-center align-items-center mr-2"
          >
            <img
              src="https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/1915417671530177260-128.png"
              style={{
                height: 24,
                width: 'auto',
                opacity: 0.5
              }}
              className={['rotate', open ? 'rotate-end' : 'rotate-start'].join(
                ' '
              )}
            />
          </div>
        </div>
      </div>
      <Collapse in={open}>
        <div>
          <div className="pl-3 border-top py-3 bg-light d-flex">
            <div className="pr-3 text-right">
              <div>Attack:</div>
              <div>Defense:</div>
              <div>Sp. Atk.</div>
              <div>Sp. Def.</div>
              <div>Speed</div>
              <div>Total:</div>
            </div>
            <div>
              <div>{atk}</div>
              <div>{def}</div>
              <div>{spatk}</div>
              <div>{spdef}</div>
              <div>{speed}</div>
              <div>{total}</div>
            </div>
          </div>
        </div>
      </Collapse>
      <style jsx>{`
        .rotate {
          transition: transform 0.2s;
        }

        .rotate-start {
          transform: rotateX(0deg);
        }

        .rotate-end {
          transform: rotateX(180deg);
        }
      `}</style>
    </>
  )
}
