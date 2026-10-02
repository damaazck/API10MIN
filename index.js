const main = document.querySelector("main");

fetch("https://dragonball-api.com/api/characters")
    .then(response => response.json())
    .then(data => {

        data.items.forEach(personaje => {

            const article = document.createElement("article");

            article.innerHTML = `
                <h2>${personaje.name}</h2>

                <img src="${personaje.image}" alt="${personaje.name}">

                <p>Raza: ${personaje.race}</p>
                <p>Género: ${personaje.gender}</p>
                <p>Ki: ${personaje.ki}</p>
                <p>Ki máximo: ${personaje.maxKi}</p>
                <p>Afiliación: ${personaje.affiliation}</p>

                <p>${personaje.description}</p>
            `;

            main.appendChild(article);
        });

    })
    .catch(error => {
        console.error("Error:", error);
    });