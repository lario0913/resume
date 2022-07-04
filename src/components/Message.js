import React, {useState} from 'react'

function Message() {
    const [message, setMessage] = useState("Welcome Dynamic Larrie")
  return (
    <div>
        <h1>{message}</h1>
        <button onClick={() => setMessage('Thanks for showing up')}>Subscribe</button>
    </div>
  )
}

export default Message