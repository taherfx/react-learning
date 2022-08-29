import React, { useState } from 'react'

const HookUsername = () => {
    const [name, setName] = useState({firstName: '', lastName: ''})
  return (
    <div>
        <form>
            <div>
                <input type="text" value={name.firstName} onChange={(e) => setName({...name, firstName: e.target.value})}/>
            </div>
            <div>
                <input type="text" value={name.lastName} onChange={(e) => setName({...name, lastName: e.target.value})}/>
            </div>
        </form>
        <div>
            <h2>{name.firstName}</h2>
            <h2>{name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </div>
    </div>
  )
}

export default HookUsername