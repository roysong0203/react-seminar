import { useState } from 'react'
import './App.css'

function InputTodo({ addTodo }) {
    const [inputValue, setInputValue] = useState("")

    return (
        <div style={{margin: "1.2em"}}>
            <input style={{width: "50vh"}} type="text" value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} placeholder="Enter todo"/>
            <button onClick={() => addTodo(inputValue)}>Add Todo</button>
        </div>
    )
}

export default InputTodo