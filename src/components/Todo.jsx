import React, {useState} from 'react'
import TodoForm from './TodoForm'
import { AiOutlineCloseCircle } from 'react-icons/ai'; //estos son botones con estilos que importe de react-icons
import { TiEdit } from 'react-icons/ti';

function Todo({todos, completeTodo, removeTodo, updateTodo}){

   const [edit, setEdit] = useState({
       id: null,
       value: ''
   })

   //Explica con tus propias palabras como funciona este Handler.
   const submitUpdate = value =>{
       updateTodo(edit.id, value);
       setEdit({
           id:null,
           value:''
       });
   };

   if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

   //En el map utilizamos el array de tareas (todos) que creamos con TodoList
   return todos.map((todo, index)=>(

        <div 
        className={todo.isComplete ? 'todo-row complete': 'todo-row'}
        key={index}>
        
        <div key={todo.id} onClick={()=> completeTodo(todo.id)}> 
        {todo.text}
        </div>
        <AiOutlineCloseCircle onClick={()=>removeTodo(todo.id)}/>
        <TiEdit onClick={()=>setEdit({id:todo.id, value:todo.text})}/>

        </div>
    ))
    //en el boton de edit, pasamos como un objeto el id del item que queremos editar y su value.
}

//todo.id representa el id que le generamos a cada input con el handleSubmit en todoFormjsx.
//todo.text es el contenido que escribimos en el input
//todavia falta agregarle funcionialidad a lost botones que creamos.

export default Todo;

//Acuerdense de importar Todo.jsx en TodoList.jsx para poder ir viendo los cambios
//y dentro del return de la funcion TodoList agregar <Todo todos={todos}/>