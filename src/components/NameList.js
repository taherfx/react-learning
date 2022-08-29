import React from 'react'
import Person from './Person'

function NameList() {
    // const list = ["Bruce", "Clark", "Barry"]
    const persons = [
        {
            id: 0,
            name: "Bruce",
            age: 31,
            skill: "Earth"
        },
        {
            id: 1,
            name: "Clark",
            age: 28,
            skill: "kryptonian"
        },
        {
            id: 2,
            name: "Dianan",
            age: 26,
            skill: "Amzonian"
        }
    ]
    const personList = persons.map(a => <Person key={a.id} person={a} />)
    return (
    <div>
        {personList}
        {/* {list.map(x=><div>{x}</div>)} */}
        {/* <div>{list[0]}</div>
        <div>{list[1]}</div>
        <div>{list[2]}</div> */}
    </div>
  )
}

export default NameList