import { useSpring, animated, interpolate } from 'react-spring';
import { useGesture } from 'react-with-gesture';
import hexData from '../../utils/hexDataDerick';
import Stats from './Stats';
import { FaArrowRight } from 'react-icons/fa';
// import { GoGraph } from 'react-icons/go';


export default function Card ({pokemon}) {
  const [bind, { delta, down }] = useGesture()
  const { x, bg, size } = useSpring({
    x: down ? delta[0] : 0,
    bg: `linear-gradient(120deg, ${delta[0] > 0 ? '#96fbc4 0%, #f9f586' : '#f093fb 0%, #f5576c'} 100%)`,
    size: down ? 0.5 : 1,
    immediate: name => down && name === 'x'
  })
  const avSize = x.interpolate({ map: Math.abs, range: [50, 300], output: ['scale(0.5)', 'scale(1)'], extrapolate: 'clamp' })


  return (
      <animated.div {...bind()} className="item" style={{ background: bg }}>
        <animated.div className="av" style={{ transform: avSize, justifySelf: delta[0] > 0 ? 'end' : 'start' }} />
          <animated.div className="fg" style={{ transform: interpolate([x, size], (x, s) => `translate3d(${x}px,0,0) scale(${s})`) }}>
  
          <div className="cardContainer" style={{background: `linear-gradient(30deg, ${hexData[pokemon.type1]} 0%, ${hexData[pokemon.type2] || ''} 51%, rgba(255,255,255,1) 100%)`}}>
            <div className="pokemonBackground"></div>
            <div style={{flex: 4, display:'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1}}>
              <div className="pokeID">12</div>
              <img src={pokemon.sprite} style={{width: '80%', marginTop: '2rem'}} />
              <div className="pokeName">{pokemon.name}</div>
              <img src='https://i.imgur.com/4Nnb5T5.png' style={{position: 'absolute', width:'15%', right: 0, top: 0, opacity: `${(delta[0] > 0) ? 1 : 0}`, transition: '2s'}}/>
            </div>
            <div style={{flex: 5, overflow: 'hidden'}}>
              <Stats pokemon={pokemon}/>
            </div>
          </div> 
          <FaArrowRight size='2rem' style={{position: 'absolute', right: '1%', top: '40%'}}/>
        </animated.div>
      </animated.div>

  )
}