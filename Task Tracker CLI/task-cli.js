import { createTask, deleteTask, listTasks, markProgress, updateTask } from "./functions.js";

const args = process.argv.slice(2);

if (args) {

    const commands = {
        add: () => { args[1] ? createTask(args[1]) : console.log("No has proporcionado descripción de la tarea"); },
        update: () => { args[1] && args[2] ? updateTask(args[1], args[2]) : console.log("Debes proporcionar el ID de la tarea y la tarea, en ese orden"); },
        delete: () => { args[1] ? deleteTask(args[1]) : console.log("Debes proporcionar el ID de la tarea"); },
        "mark-in-progress": () => { args[1] ? markProgress(args[1], "In progress") : console.log("Debes proporcionar el ID de la tarea"); },
        "mark-done": () => { args[1] ? markProgress(args[1], "Done") : console.log("Debes proporcionar el ID de la tarea"); },
        list: () => { args[1] ? listTasks(args[1]) : listTasks(); },
        "-h": () => { return console.log("Los comandos disponibles son: \nadd: Añade una tarea\nupdate: Actualiza una tarea\ndelete: Elimina una tarea \nmark-in-progress: Marca un tarea como en progreso\nmark-done: Marca una tarea como hecha \nlist: lista las tareas\nPara una información más detallada comprueba el Readme.md"); }
    };

    const command = commands[args[0]];

    command();
}
