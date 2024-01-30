import React, { useState } from 'react'

function Test(props) {
    var a;
    const [status, setStatus] = useState()
    const [test, setTest] = useState()
    const handle = () => {
        setStatus('Clicked')
    }

    return (
        <div>
            <h1>Hello Rasi {status} </h1>
            <input onChange={
                (e) => setTest(e.target.value)
            }
            value={test}></input>
            <button onClick={handle}>Click Me</button>
            <h3>{props.value}</h3>
        </div>
    )
}

export default Test