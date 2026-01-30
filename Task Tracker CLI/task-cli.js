import { createTask, deleteTask, updateTask } from "./functions.js";

const args = process.argv.slice(2);

if (args) {

    const commands = {
        add: () => { args[1] ? createTask(args[1]) : console.log("No has proporcionado descripción de la tarea"); },
        update: () => { args[1] && args[2] ? updateTask(args[1], args[2]) : console.log("Debes proporcionar el ID de la tarea y la tarea, en ese orden"); },
        delete: () => { args[1] ? deleteTask(args[1]) : console.log("No has proporcionado id") },
        "mark-in-progress": () => { return console.log("Comando mark-in-progress"); },
        "mark-done": () => { return console.log("Comando mark-done"); },
        list: () => { return console.log("Comando list"); },
        "-h": () => { return console.log("Comando -h"); }
    };

    const command = commands[args[0]];

    command();
}
