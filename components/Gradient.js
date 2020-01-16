import hexData from '../utils/hexData'

export default function Gradient({ children, className, style, type1, type2 }) {
  return (
    <div
      className={className}
      style={{
        ...style,
        background: type2
          ? `linear-gradient(45deg, ${hexData[type1]} 0%, ${hexData[type1]} 30%, ${hexData[type2]} 70%, ${hexData[type2]} 100%)`
          : hexData[type1]
      }}
    >
      {children}
    </div>
  )
}
