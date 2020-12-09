import React, {useState} from 'react';
import TodoForm from './TodoForm'
import Todo from './Todo'
import {AiFillHeart} from 'react-icons/ai'


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
    
    //CREAR EL EVENTHANDLER UPDATE TODO
    const updateTodo = (todoId, newValue) => {
      //como nosotros queremos setear el cambio que realizamos sobre todos, pasamos el map directamente
      //dentro de setTodos.
      setTodos(prev => prev.map(todo => (todo.id === todoId ? newValue : todo)));
      //prev: es el valor de todo previo sobre el que vamos a realizar el map.
      //todo.id = es el id del todo sobre el cual iteramos
      //todoId = es el id del todo que pasamos por parametro
      //la logica del ternario seria: si el id de esta tarea es igual al id que pasamos por parametro, seteame su valor 
      //con este nuevo valor que ingreamos tambien por parametro, sino devolveme la tarea tal cual ingreso.
    };
  


    //CREAR EVENTHANDLER REMOVE TODO
    //a) pasamos por parametro el id de la tarea que deseamos remover
    //b) con el spread operator ingresamos todos los todos dentro de un nuevo array para poder aplicarles el metodo filter
    //c) y de ahi en mas decimos, si el todo.id que te paso es diferente al id que ingreso por parametro guardamelo 
    //en la variable temporal removedArr
    //d)seteamos el arreglo de todos pasando la variable temporal por setTodos()
    const removeTodo = id => {
      const removedArr = [...todos].filter(todo => todo.id !== id);
      setTodos(removedArr);
    };

    //CREAR UN EVENHANDLER COMPLETETODO

    const completeTodo = id => {
      let updatedTodos = todos.map(todo => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      });
      setTodos(updatedTodos);
    };

return(
<>
    <h1>Lista de compras!</h1>
    <TodoForm onSubmit = {addTodo}/>
    <Todo //Aca pasamos todos los handlers que creamos para Todo
    todos={todos}
    completeTodo={completeTodo}
    removeTodo={removeTodo}
    updateTodo={updateTodo}
    />
    <h5>Hace click sobre lo que ya compraste!</h5>
    <h5><em>Hecho con amor <AiFillHeart/></em></h5>
</>
 )
} //pasamos el eventHandler addTodo por TodoForm para que capture el input que ingresa por TodoForm 
  //y lo retorne en nuestra lista.


export default TodoList;