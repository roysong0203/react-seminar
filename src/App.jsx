import { use, useState, useEffect } from 'react'
import './App.css'
import Todo from './Todo'
import InputTodo from './InputTodo'

function App() {
  
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const todos = localStorage.getItem('todos')
    if (todos) {
      setTodos(JSON.parse(todos))
    }
  }, [])

  function addTodo(todo) {
    setTodos([...todos, todo])
    localStorage.setItem('todos', JSON.stringify([...todos, todo]))
    console.log(todos, todo)
  }

  function deleteTodo(todo) {
    console.log(todos.filter(todo_ => todo_ !== todo))
    setTodos(todos.filter(todo_ => todo_ !== todo))
    localStorage.setItem('todos', JSON.stringify(todos.filter(todo_ => todo_ !== todo)))
  }

  return (
    <>
      <h1>Todo List</h1>
      <InputTodo addTodo={addTodo} />
      <div>
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} deleteTodo={deleteTodo} />
        ))}
      </div>
    </>
  )
}

export default App
