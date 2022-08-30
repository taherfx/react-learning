import React, { useEffect, useState } from 'react'

function MouseHoverUE() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = (e) => {
        console.log("Mouse move Effect")
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() => {
        console.log("Use Effect Called")
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            window.removeEventListener("mousemove", logMousePosition)
        }
    }, [])
  return (
    <div>
        hook - {x} and  - {y}
    </div>
  )
}

export default MouseHoverUE