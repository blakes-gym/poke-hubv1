import { useState } from 'react'

import Gradient from '../Gradient'
import { Collapse } from 'react-bootstrap'
import images from '../../utils/imageUrls'

import colors from '../../utils/hexData'

export default function TeamMember({
  name,
  icon,
  type1,
  type2,
  hp,
  atk,
  def,
  spatk,
  spdef,
  speed,
  total
}) {
  const stats = [hp, atk, def, spatk, spdef, speed, total]
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
                <img src={icon} style={{ width: 40, height: 'auto' }} />
              </div>
            </div>
          </Gradient>
          <div
            style={{
              color: 'black',
              fontSize: '1.1rem'
            }}
          >
            {name}
          </div>
          <div
            className="ml-auto mr-4 text-center d-flex flex-column justify-content-center"
            style={{ fontSize: 12, height: 56, fontWeight: 500 }}
          >
            <Type type={type1} />
            {type2 && (
              <div style={{ marginTop: 6 }}>
                <Type type={type2} />
              </div>
            )}
          </div>
          <div style={{ marginRight: 12 }}>
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
                  transform: rotate(-45deg);
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
              <div>HP</div>
              <div>Attack:</div>
              <div>Defense:</div>
              <div>Sp. Atk.</div>
              <div>Sp. Def.</div>
              <div>Speed</div>
              <div>Total:</div>
            </div>
            <div>
              {stats.map((stat, i) => (
                <div key={`${name}-stat-${i}`}>{stat}</div>
              ))}
            </div>
          </div>
        </div>
      </Collapse>
    </>
  )
}

function Type({ type }) {
  return (
    <div
      style={{
        background: colors[type] + 'd',
        width: 60,
        paddingTop: 2,
        paddingBottom: 2,
        borderRadius: 4
      }}
      className="border border-white shadow-sm"
    >
      {type}
    </div>
  )
}
