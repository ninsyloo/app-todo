import React, {useState} from 'react';

function TodoForm(props){
  
    const [input, setInput] = useState(''); 
    //el useState es lo que va a manejar los estados del input.
    //el estado incial del input es estar vacio, ya que no contiene ningun tipo de informacion
    //cuando el usuario escribe una actividad dentro del input ej: pasear el perro, lo que hace es cambiar ese estado
    //por lo que vamos a necesitar setearlo.
    //Como lo que vamos a recibir es una string, nosotros pasamos dentro del useState comillas.


    //El manejo de eventos en React se realiza con handlers como los de abajo
    //Que son los handlers? Son funciones callback que vamos a utilizar para otorgar 
    //funcionalidad a nuestros componentes.
    
   const handleChange =(e)=>{
        setInput(e.target.value); //seteamos el estado que ingresa desde el value de input
    };
 
    const handleSubmit =(e)=>{

        e.preventDefault();

        props.onSubmit({
            id:Math.floor(Math.random() * 10000), //esto es para generar un 'id' random a cada prop que ingresamos por el input
            text:input //esto es lo que escribimos en el input.
        });
        
        setInput('');//esto vacia nuestro input cuando apretamos el submit. Si lo sacan se van a dar cuenta
      //que el input no se vacia y que lo que escribieron queda ahi. Sirve para lo mismo que nos servia 
      //escribir $('#lista').html('') en la tarea de ajax.
      };

    return(
        <form className='todo-form' onSubmit={handleSubmit}> 
        <input
        className='todo-input'
        type='text'
        placeholder='Agregar Tarea' 
        value={input}//este es el valor que ingresa en el handleChange cuando seteamos el estado.
        onChange={handleChange}
        />
        <button className='todo-button' onClick={handleSubmit}>Submit</button>
        </form>
    )
}


export default TodoForm;


