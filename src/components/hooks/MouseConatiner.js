import React, { useState } from 'react'
import MouseHoverUE from './MouseHoverUE'

function MouseConatiner() {
    const [display, setDisplay] = useState(true)
  return (
    <div>
        <button onClick={() => setDisplay(!display)}>Toogle Display</button>
        {display && <MouseHoverUE />}
    </div>
  )
}

export default MouseConatiner