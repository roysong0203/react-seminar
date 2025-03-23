import './App.css'

function Todo({ todo, deleteTodo, editTodo }) {
    return (
        <div style={{width: "50vw", margin: "1.2em", display: "flex", justifyContent: "flex-end"}}>
            <input type="checkbox" id={todo.id}/>
            <label style={{width: "30vw"}} for={todo.id}>{todo.content}</label>
            <button onClick={() => deleteTodo(todo)}>Delete</button>
            <button onClick={() => editTodo(todo)}>Edit</button>
        </div>
    )
}

export default Todo