import './App.css'

function Todo({ todo, deleteTodo }) {
    return (
        <div>
            <p>{todo}</p>
            <button onClick={() => deleteTodo(todo)}>Delete</button>
        </div>
    )
}

export default Todo