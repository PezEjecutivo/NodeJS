import { existsSync } from "node:fs";
import { writeFile, readFile } from "node:fs/promises";

async function getNewId() {
    const id = await readFile("./idtracker.txt", "utf-8");
    const newId = Number(id) + 1;
    await writeFile(`./idtracker.txt`, newId.toString());

    return newId;
}

async function createExpense(desc, amount) {
    const id = await getNewId();
    let file = [];

    const expense = {
        id: id,
        date: new Date().toLocaleString().split(",")[0],
        description: desc,
        amount: amount
    };

    if (existsSync("./expenses.json")) {
        file = await readFile("./expenses.json", "utf-8");

        const jsonFile = JSON.parse(file);
        jsonFile.push(expense);

        await writeFile("./expenses.json", JSON.stringify(jsonFile));
    } else {
        file.push(expense);
        await writeFile("./expenses.json", JSON.stringify(file));
    }

    console.log(`Expense added successfully (ID: ${id})`);
}

createExpense("Powerking", "1.10");
