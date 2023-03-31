import React from 'react'
import Todo from './Todo'

function TodoList({todos , setTodos,filteredTodos }) {
  
  return (
    <div className='todo-container'>
        <ul className="todo-list">
          {filteredTodos.map(todo =>(
            <Todo 
              setTodos ={setTodos}  
              todos = {todos} 
              text = {todo.text} 
              key ={todo.id} 
              todo = {todo}/>
          ))}
        </ul>
    </div>
  )
}

export default TodoList;