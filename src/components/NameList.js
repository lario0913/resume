import React from 'react'

export const NameList = () => {
 const names = ["Lario", "Larrie", "lampard"]
 return( <div>{
        names.map(name => {
            return <h2>{name}</h2>
        })
    }</div>)
}
