import React from 'react'

export const ChildComponent = (props) => {
  return (
    <button onClick={props.greetHandler}>Greet Parent</button>
  )
}
