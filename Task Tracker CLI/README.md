# Task Tracker CLI

Es un proyecto realizado con NodeJS utilizando exclusivamente sus funciones nativas, sin importar librerias o dependencias externas.

El proyecto esta hecho con los requisitos y requerimientos de la pagina: https://roadmap.sh/projects/task-tracker

## Comandos disponibles

Este CLI tiene diversos comandos disponibles, los cuales son:

- add: Añade una tarea
- update: Actualiza una tarea
- delete: Borra una tarea
- mark-in-progress: Marca como en progreso una tarea
- mark-done: Marca como hecha una tarea
- list: Muestras todas las tareas

## Casos de Uso

### Comando add

El comando **add** necesita solamente un parametro que es la tarea en sí, por lo que si quisieramos añadir una tarea que es "Hacer la cama", tendriamos que hacer:

`node ./task-cli.js add "Hacer la cama"`

Esto nos devolveria un mensaje diciendo que se ha creado correctamente y el ID de dicha tarea.

### Comando update

El comando **update** necesita de dos parametros, el primer parametro es la ID de la tarea y el segundo parametro es la acción de la tarea, imagenemos que tenemos una tarea con el ID que es "Hacer la cama" y queremos convertirla en "Hacer la cama y el armario", tendriamos que hacer:

`node ./task-cli.js update 1 "Hacer la cama y el armario"`

Esto nos devolveria un mensaje diciendo que se ha actualizado correctamente y el ID de dicha tarea.

### Comando delete

El comando **delete** solo necesita un parametro que es el ID de la tarea, por lo que si quisieramos eliminar una tarea con el ID 1, tendriamos que hacer:

`node ./task-cli.js delete 1`

Esto nos devolveria un mensaje diciendo que se ha eliminado correctamente y el ID de dicha tarea

### Comando mark-in-progress

El comando **mark-in-progress** solo necesita un parametro que es el ID de la tarea, por lo que si queremos marcar como en progreso la tarea con el ID 2, tendriamos que hacer:

`node ./task-cli.js mark-in-progress 2`

Esto nos devolvera un mensaje diciendo que se ha actualizado correctamente y el ID de dicha tarea

### Comando mark-done

El comando **mark-done** solo necesita un parametro que es el ID de la tarea, por lo que si queremos marcar como hecha la tarea con el ID 2, tendriamos que hacer:

`node ./task-cli.js mark-done 2`

Esto nos devolvera un mensaje diciendo que se ha actualizado correctamente y el ID de dicha tarea

### Comando list

El comando **list** puede o no recibir un parametro, si lo escribimos sin ningún parametro, nos mostrara el ID, Descripción y Estado de todas las tareas, pero si le añadimos un segundo parametro, el cual debe ser un estado, nos devolvera la lista de tareas que tengan esos estados

`node ./task-cli list`

Esto nos devolvera todas las tareas

`node ./task-cli list todo`

Esto nos devolvera todas las tareas que tengan el estado "todo"

`node ./task-cli list in-progress`

Esto nos devolvera todas las tareas que tengan el estado "in-progress"

`node ./task-cli list done`

Esto nos devolvera todas las tareas que tengan el estado "done"
