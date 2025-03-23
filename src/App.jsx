import { use, useState, useEffect } from 'react'
import './App.css'
import Todo from './Todo'
import InputTodo from './InputTodo'

function App() {
  
  const [id, setId] = useState(0)
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const todos = localStorage.getItem('todos')
    if (todos) {
      const savedTodos = JSON.parse(todos)
      setTodos(savedTodos)
      setId(savedTodos[savedTodos.length - 1].id + 1)
    }
  }, [])

  function addTodo(content) {
    if (!content) return
    setTodos([...todos, { content, id }])
    setId(id + 1)
    localStorage.setItem('todos', JSON.stringify([...todos, { content, id}]))
    console.log(todos, content, id)
  }

  function deleteTodo(todo) {
    console.log(todos.filter(todo_ => todo_.id !== todo.id))
    setTodos(todos.filter(todo_ => todo_.id !== todo.id))
    localStorage.setItem('todos', JSON.stringify(todos.filter(todo_ => todo_.id !== todo.id)))
  }

  function editTodo() {
    console.log('editTodo')
  }

  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", height: "100vh"}}>
      <h1>Todo List</h1>
      <InputTodo addTodo={addTodo} />
      <div>
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} deleteTodo={deleteTodo} />
        ))}
      </div>
    </div>
  )
}

export default App
