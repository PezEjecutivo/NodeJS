# NodeJS
Repositorio con multiples mini proyectos de NodeJS

## 1. Task Tracker CLI

### Requisitos
La aplicación debe funcionar en la linea de comando, permitiendo que el usuario introduzca argumento y guardando las tareas en un archivo JSON. El usuario debe poder:

- Añadir, Actualizar y Borrar tareas
- Marcar una tarea como en progreso o hecha
- Mostrar todas las tareas
- Mostrar todas las tareas hechas
- Mostrar todas las tareas no hechas
- Mostrar todas las tareas en progreso

### Propiedades de las tareas
Cada tarea debe de tener las siguientes propiedades:

- id: Identificador unico
- description: Descripción de la tarea
- status: El estado de la tarea (todo, in-progress, done)
- createdAt: La fecha en la que se creo la tarea
- updateAt: La fecha en la que se hizo la ultima actualización

## 2. GitHub User Activity

### Requisitos
La aplicación debe funcionar desde la linea de comando, aceptar un usuario de GitHub como argumento, hacer una petición de la actividad reciente del usuario utilizando la API de Github, y mostrar la información en la terminal. El usuario debe poder hacer:

- Mandar el nombre de usuario de GitHub como argumento

```bash
github-activity <username>
```

- Obtener la información reciente del usuario de GitHub usando la API de GitHub, usando el siguiente endpoint:

```bash
https://api.github.com/users/<username>/events
```

- Mostrar la actividad reciente en la terminal
