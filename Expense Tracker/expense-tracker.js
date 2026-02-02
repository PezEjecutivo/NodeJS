import { Command } from "commander";
import { createExpense, deleteExpense, listExpense, summaryExpense, updateExpense } from "./utils.js";
const program = new Command();

program
    .name('expense-tracker')
    .description('CLI para manejar tus gastos')
    .version('0.1.0');


program.command('add')
    .description('Añade un gasto')
    .option('--description <string>', 'Descripción del gasto')
    .option('--amount <int>', 'Cantidad del gasto')
    .action((options) => {
        if (options.description && options.amount) {
            createExpense(options.description, options.amount);
        } else {
            console.log("Debes introcudir descripción y cantidad a la hora de crear un gasto");
        }
    });

program.command('update')
    .argument('[id]', 'ID del gasto')
    .option('--description <string>', 'Descripción del gasto')
    .option('--amount <int>', 'Cantidad del gasto')
    .action((id, options) => {
        if (!id) {
            console.error("Debes de proporcionar el ID");
            process.exit(1);
        }

        updateExpense(id, options.description, options.amount);
    });

program.command('list')
    .description('Muestra los gastos')
    .action(() => {
        listExpense();
    });

program.command('summary')
    .description('Muestra un resumen de los gastos')
    .option('--month <int>', 'Mes del año del que quieres mostrar los gastos')
    .action((options) => {
        summaryExpense(options.month);
    });

program.command('delete')
    .description('Borra un gasto')
    .option('--id <int>', 'ID de la tarea a borrar')
    .action((options) => {
        if (options.id) {
            deleteExpense(options.id);
        } else {
            console.log("Debes introducir un ID");
        }
    });

program.parse();
