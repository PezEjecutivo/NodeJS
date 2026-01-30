import { writeFile, readFile, readdir } from "node:fs/promises";

async function getNewId() {
    const id = await readFile("./idtracker.txt", "utf-8");
    const newId = Number(id) + 1;
    await writeFile(`./idtracker.txt`, newId.toString());

    return newId;
}

export async function createTask(desc) {
    const id = await getNewId();

    const task = [{
        id: id,
        description: desc,
        status: "Todo",
        createdAt: new Date(),
        updatedAt: "Esta tarea no ha sido actualizada."
    }];

    await writeFile(`./Tasks/${id}.json`, JSON.stringify(task));

    console.log(`Task added successfully (ID: ${id})`);
}

export async function updateTask(id, desc) {
    const file = await readFile(`./Tasks/${id}.json`, "utf-8");

    const jsonFile = JSON.parse(file);

    jsonFile[0].description = desc;
    jsonFile[0].updatedAt = new Date();

    await writeFile(`./Tasks/${id}.json`, JSON.stringify(jsonFile));

    console.log(`Task updated successfully (ID: ${id})`);
}