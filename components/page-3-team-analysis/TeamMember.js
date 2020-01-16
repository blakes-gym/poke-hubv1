import { useState } from 'react'

import Gradient from '../Gradient'
import { Collapse } from 'react-bootstrap'
import images from '../../utils/imageUrls'

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
      <div onClick={toggle}>
        <Gradient
          type1={type1}
          type2={type2}
          className="d-flex align-items-center"
          opacity={'8'}
        >
          <Gradient
            type1={type1}
            type2={type2}
            className="p-1 mr-2 rounded border shadow-sm m-1"
          >
            <div
              className="bg-white p-1 border"
              style={{ borderRadius: '50%' }}
            >
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
            <div className="text-muted d-flex justify-content-center align-items-center mr-2">
              <img
                src={images.plus}
                style={{
                  height: 16,
                  width: 'auto',
                  opacity: 0.8,
                  userSelect: 'none'
                }}
                className={[
                  'rotate',
                  open ? 'rotate-end' : 'rotate-start'
                ].join(' ')}
              />
              <style jsx>{`
                .rotate {
                  transition: transform 0.2s;
                }

                .rotate-start {
                  transform: rotate(0deg);
                }

                .rotate-end {
                  transform: rotate(45deg);
                }
              `}</style>
            </div>
          </div>
        </Gradient>
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
    </>
  )
}
