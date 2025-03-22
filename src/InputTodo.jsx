import { useState } from 'react'

function InputTodo({ addTodo }) {
    const [inputValue, setInputValue] = useState("")

    return (
        <>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter todo"/>
            <button onClick={() => addTodo(inputValue)}>Add Todo</button>
        </>
    )
}

export default InputTodo