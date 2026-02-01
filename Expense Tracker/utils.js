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

async function updateExpense(id, desc, amount) {
    const file = await readFile("./expenses.json", "utf-8");
    const jsonFile = JSON.parse(file);
    const index = jsonFile.findIndex(expense => expense.id == id);

    jsonFile[index].description = desc;
    jsonFile[index].amount = amount;

    await writeFile("./expenses.json", JSON.stringify(jsonFile));

    console.log(`Expense updated successfully (ID: ${id})`);
}

async function deleteExpense(id) {
    const file = await readFile("./expenses.json", "utf-8");
    const jsonFile = JSON.parse(file);
    const expense = jsonFile.filter(expense => expense.id != id);

    await writeFile("./expenses.json", JSON.stringify(expense));

    console.log(`Expense deleted successfully (ID: ${id})`);
}

async function listExpense() {
    const file = await readFile("./expenses.json", "utf-8");
    const jsonFile = JSON.parse(file);

    console.log("ID  Date       Description  Amount");
    jsonFile.forEach(expense => {
        console.log(`${expense.id}  ${expense.date}   ${expense.description}        ${expense.amount}`);
    });
}
