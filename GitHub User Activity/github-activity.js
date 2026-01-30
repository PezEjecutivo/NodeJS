async function fetchData(username) {

    try {
        const response = await fetch(`https://api.github.com/users/${username}/events`);

        if (!response.ok) {
            if (response.status == 404) {
                throw new Error("El usuario que has introducido no existe");
            }

            throw new Error("No se pudo conseguir el recurso");
        }

        const data = await response.json();
        return data.slice(0, 3);
    }

    catch (error) {
        console.error(error);
    }
}

async function getActivity(username) {
    if (!username) {
        return console.error("No has introducido ningún usuario");
    }

    const result = await fetchData(username);

    if (result) {
        result.forEach(event => {
            console.log(`Usuario: ${event.actor.login} \nEvento: ${event.type} \nRepositorio: ${event.repo.name} \n\n`);
        });
    }

    return console.error("Ha sucedido un error al obtener los datos");
}

const args = process.argv.slice(2);

getActivity(args[1]);
