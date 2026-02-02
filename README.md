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

## 3. Expense Tracker

### Requisitos

La aplicación debera funcionar desde la lina de comando y tener las siguientes caracteristicas

- El usuario puede añadir un gasto con cantidad y descripcion
- El usuario puede actualizar un gasto
- El usuario puede borrar un gasto
- El usuario puede ver todos los gastos
- El usuario puede ver un resumen de todos los gastos
- El usuario puede ver un resumen de todos los gastos de un mes especifico (del año actual)

### Ejemplos de uso

```bash
$ expense-tracker add --description "Lunch" --amount 20
# Expense added successfully (ID: 1)

$ expense-tracker add --description "Dinner" --amount 10
# Expense added successfully (ID: 2)

$ expense-tracker list
# ID  Date       Description  Amount
# 1   2024-08-06  Lunch        $20
# 2   2024-08-06  Dinner       $10

$ expense-tracker summary
# Total expenses: $30

$ expense-tracker delete --id 2
# Expense deleted successfully

$ expense-tracker summary
# Total expenses: $20

$ expense-tracker summary --month 8
# Total expenses for August: $20
```