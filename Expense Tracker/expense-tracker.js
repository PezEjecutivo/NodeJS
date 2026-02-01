import { Command } from "commander";
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
        console.log("Añadir");
    });

program.command('list')
    .description('Muestra los gastos')
    .action(() => {
        console.log("Lista");
    });

program.command('summary')
    .description('Muestra un resumen de los gastos')
    .option('--month <int>', 'Mes del año del que quieres mostrar los gastos')
    .action((options) => {
        console.log("Resumen");
    });

program.command('delete')
    .description('Borra un gasto')
    .option('--id <int>', 'ID de la tarea a borrar')
    .action((options) => {
        console.log("Borrar");
    });

program.parse();
