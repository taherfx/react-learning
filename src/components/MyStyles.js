import React from 'react'
import './style.css'
import style from "./mystyle.module.css"

function MyStyles(props) {
    const isColor = props.color ? 'primary' : ''
  return (
      <div>     
        <div className={`${isColor} font-xl`}>MyStyles</div>
        <p className={style.success}>Success</p>
    </div>
  )
}

export default MyStyles