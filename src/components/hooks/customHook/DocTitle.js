import React, { useState } from 'react'
import useDocmentTitle from './useDocmentTitle'

function DocTitle() {
    const [count, setCount] = useState(0)

    useDocmentTitle(count)
  return (
    <div>
        {/* count - {count} */}
        <button onClick={() => setCount(prev => prev + 1)}>increment Count</button>
    </div>
  )
}

export default DocTitle