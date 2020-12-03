import React, {useState} from 'react'
import TodoForm from './TodoForm'

function Todo({todos, completeTodo, removeTodo, updateTodo}){

   const [edit, setEdit] = useState({
       id: null,
       value: ''
   })

   //Vamos a crear el eventHandler de submitUpdate.
   
   //En el map utilizamos el array de tareas (todos) que creamos con TodoList
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

//todo.id representa el id que le generamos a cada input con el handleSubmit en todoFormjsx.
//todo.text es el contenido que escribimos en el input
//todavia falta agregarle funcionialidad a lost botones que creamos.

export default Todo;

//Acuerdense de importar Todo.jsx en TodoList.jsx para poder ir viendo los cambios
//y dentro del return de la funcion TodoList agregar <Todo todos={todos}/>