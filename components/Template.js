import 'bootstrap/scss/bootstrap.scss'

import { useState } from 'react'

export default function Template({ children }) {
  return (
    <div>
      Test
      <div>{children}</div>
    </div>
  )
}
