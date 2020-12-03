##SEGUNDA PARTE!
##Componente TodoList.

Que es lo primero que tenemos que hacer cuando empezamos un nuevo componente?
Importar lo que vamos a usar. En nuestro caso es un componente de react, entonces vamos a necesitar React.
Como tambien vamos a manejar estados dentro del TodoList vamos a necesitar useState.
Y como nuestra lista se va a conformar de inputs que realizamos en el TodoForm, tambien lo importamos.


Ahora ya estamos listos para trabajar!

Empecemos haciendo la funcion de TodoList
Como ya sabemos, toda funcion de un componente tiene que tener un return
Dentro del return vamos a necesitar dos cosas: Un div y el TodoForm que importamos.
Como algo extra, le pueden agregar un header o titulo, o quizas alguna oracion que cuente algo sobre nuestra app.

Ahora hay que agregarle funcionalidad, como ya dijimos antes, para poder hacer esto vamos a necesitar un EventHandler
En nuestro caso, nosotros queremos ir agregando 'toDos' en una lista, por lo que vamos a crear un Handler que se llame addTodo y que va a ser exactamente eso.
Una vez que ya lo tengamos hecho lo vamos a pasar por nuestra etiqueta de TodoForm como hicimos anteriormente.
Como lo que nosotros estamos buscando realizar es un submit como deberia escribirse?


exportemos nuestro componente.
