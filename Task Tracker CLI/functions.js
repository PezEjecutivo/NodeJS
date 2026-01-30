import { existsSync } from "node:fs";
import { writeFile, readFile, readdir } from "node:fs/promises";

async function getNewId() {
    const id = await readFile("./idtracker.txt", "utf-8");
    const newId = Number(id) + 1;
    await writeFile(`./idtracker.txt`, newId.toString());

    return newId;
}

export async function createTask(desc) {
    const id = await getNewId();
    let file = [];

    const task = {
        id: id,
        description: desc,
        status: "Todo",
        createdAt: new Date(),
        updatedAt: "Esta tarea no ha sido actualizada."
    };

    if (existsSync("./Tasks.json")) {
        file = await readFile("./Tasks.json", "utf-8");

        const jsonFile = JSON.parse(file);
        jsonFile.push(task);

        await writeFile(`./Tasks.json`, JSON.stringify(jsonFile));

    } else {
        file.push(task);
        await writeFile(`./Tasks.json`, JSON.stringify(file));
    }

    console.log(`Task added successfully (ID: ${id})`);
}

export async function updateTask(id, desc) {
    const file = await readFile(`./Tasks.json`, "utf-8");
    const jsonFile = JSON.parse(file);
    const index = jsonFile.findIndex(task => task.id == id);

    jsonFile[index].description = desc;
    jsonFile[index].updatedAt = new Date();

    await writeFile(`./Tasks.json`, JSON.stringify(jsonFile));

    console.log(`Task updated successfully (ID: ${id})`);
}

export async function deleteTask(id) {
    const file = await readFile(`./Tasks.json`, "utf-8");
    const jsonFile = JSON.parse(file);
    const task = jsonFile.find(task => task.id == id);

    if (!Number(id)) {
        return console.log("La ID debe ser un numero");
    }

    if (!task) {
        return console.log(`This task doesnt exist (ID: ${id})`);
    }

    const updatedJsonFile = jsonFile.slice(task, 1);

    await writeFile("./Tasks.json", JSON.stringify(updatedJsonFile));

    console.log(`Task deleted successfully (ID: ${id})`);
}