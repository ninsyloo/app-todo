import React, {useState} from 'react'
import TodoForm from './TodoForm'


function Todo({todos, completeTodo, removeTodo, updateTodo}){

   const [edit, setEdit] = useState({
       id: null,
       value: ''
   })

    return todos.map((todo, index)=>(

        <div>
        <div key={todo.id}> 
        {todo.text}
        </div>
        <button>x</button>
        <button>edit</button>
        </div>

    ))
}

//Vamos a crear el eventHandler de submitUpdate.

//El return esta vez va a consistir de un map sobre todos, 
//donde vamos a generar nuevos arrays a partir de cada 'todo' indexado, agregandole las funciones que tienen que tener:
//completar tarea, remover y editar.

export default Todo;
