import React, {useState} from 'react';
import TodoForm from './TodoForm'
import Todo from './Todo'


function TodoList(){

 const [todos, setTodos] = useState([]);
 //todos representa los item de nuestra lista (estado incial)
 //setTodos es con lo que vamos a ir modificando el estado de nuestra lista.

    const addTodo=(todo)=>{ 
    //eventHandler --> funcion callback que vamos a utilizar para agregar nuevos item.
    
     const newTodos=[todo, ...todos]//generamos una variable que agregue un nuevo item a nuestra lista de items.
                                    //siendo todo la nueva tarea que ingresa por parametro y ...todos las tareas
                                    //que ya existian previamente en nuestro array.
     setTodos(newTodos);//Ahora seteamos la nueva lista de tareas con setTodos, para generar un nuevo estado inicial.
     console.log(...todos)//consologueamos el nuevo estado incial.
    }
    
    //CREAR EL EVENTHANDLER EDIT TODO

    const updateTodo = (todoId, newValue) =>{
      setTodos(prev => prev.map(item=>(item.id === todoId? newValue: item))
      )
    }


    //CREAR EVENTHANDLER REMOVE TODO
    //Para remover algo en particular de un array podemos utilizar el metodo filter.

    const removeTodo = (id) =>{
       const removeArr = [...todos].filter(todo => todo.id !== id)
       setTodos(removeArr)
    }

    //CREAR EVENHANDLER COMPLETE TODO
    const completeTodo = (id) =>{
       let updatedTodos = todos.map(todo =>{
         if (todo.id === id) {
           todo.isComplete = !todo.isComplete;
         }
         return todo;
       });
       setTodos(updatedTodos);
    }

return(
<div className='todo-list'>
    <h1>Que vamos hacer el dia de hoy?</h1>
    <TodoForm onSubmit = {addTodo}/>
    <Todo todos={todos}/>
    <p>Esta app la hicimos en el Stand Up</p>
</div>
 )
} //pasamos el eventHandler addTodo por TodoForm para que capture el input que ingresa por TodoForm 
  //y lo retorne en nuestra lista.


export default TodoList;