import './App.css'

function Todo({ todo, deleteTodo }) {
    return (
        <div>
            <input type="checkbox" id={todo.id}/>
            <label>{todo.content}</label>
            <button onClick={() => deleteTodo(todo)}>Delete</button>
        </div>
    )
}

export default Todo