import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

async function mainLoop() {
    wellcome();
    console.log("");
    const guessNumber = Math.floor((Math.random() * 100) + 1);
    console.log("");
    let trys = await difficultySelector();

    for (let index = trys; index > 0; index--) {
        const answer = await rl.question("Que numero crees que es: ");

        if (answer == guessNumber) {
            console.log(`Has acertado el numero!! Felicidades!! Has tardado ${(trys - index) + 1} intentos!!`);
            return;
        }

        if (answer > guessNumber) {
            console.log("El numero que has introducido es mayor.\n");
        } else {
            console.log("El numero que has introducido es menor.\n");
        }

    }

    console.log("Has perdido...\nVuelve a intentarlo cuando tengas ganas");

}

function wellcome() {
    console.log("Bienvenido a Adivina el numero!!");
    console.log("Tienes que adivinar el numero que estoy pensando, entre el 1 y el 100");
    console.log("Tienes una cantidad limitada de intentos según la dificultad");
}

async function difficultySelector() {
    console.log("Selecciona la dificultad:");
    console.log("1. Facil (10 intentos) \n2. Media (5 intentos) \n3. Dificil (3 intentos)\n");

    const answer = await rl.question("Que dificultad elijes: ");

    if (answer > 3 || answer < 1) {
        console.log("No has seleccionado una dificultad valida\n");
        process.exit(1);
    }

    const difficulty = [10, 5, 3];
    const trys = difficulty[answer - 1];

    return trys;

}

await mainLoop();
rl.close();