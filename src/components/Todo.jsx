import React, {useState} from 'react'
import TodoForm from './TodoForm'


function Todo({todos, completeTodo, removeTodo, updateTodo}){

   const [edit, setEdit] = useState({
       id: null,
       value: ''
   })

   //Vamos a crear el eventHandler de submitUpdate.
   
   return todos.map((todo, index)=>(

        <div key={index}>
        <div key={todo.id}> 
        {todo.text}
        </div>
        <button>x</button>
        <button>edit</button>
        </div>

    ))
}

export default Todo;
