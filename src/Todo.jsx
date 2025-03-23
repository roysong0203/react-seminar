import './App.css'

function Todo({ todo, deleteTodo, switchEditMode, editTodo }) {
    return (
        <div style={{width: "60vw", margin: "1.2em", display: "flex", justifyContent: "space-between"}}>
            <input type="checkbox" id={todo.id}/>
            {!todo.isEdit && <label style={{width: "40vw"}} for={todo.id}>{todo.content}</label>}
            {todo.isEdit && <input type="text" value={todo.content} style={{width: "40vw"}}
             onChange={(e) => editTodo(todo, e.target.value)}/>}
            <button style={{background: "red"}} onClick={() => deleteTodo(todo)}>Delete</button>
            {!todo.isEdit && <button style={{background: "green"}} onClick={() => switchEditMode(todo)}>Edit</button>}
            {todo.isEdit && <button style={{background: "blue"}} onClick={() => switchEditMode(todo)}>End edit</button>}
        </div>
    )
}

export default Todo