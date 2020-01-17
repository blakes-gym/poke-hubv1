import { plus } from '../utils/imageUrls'

export default function Plus({ rotate }) {
  return (
    <div className="d-flex justify-content-center align-items-center mr-2">
      <img
        src={plus}
        style={{
          height: 16,
          width: 'auto',
          opacity: 0.8,
          userSelect: 'none'
        }}
        className={['rotate', rotate ? 'rotate-end' : 'rotate-start'].join(' ')}
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
  )
}
