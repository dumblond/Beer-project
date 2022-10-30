const url = "https://api.punkapi.com/v2/beers";

const dataContainer = document.querySelector(".beers-container");

async function fetchBeers() {
    try {
        const response = await fetch(url);
        const beers = await response.json()

        console.log(beers);

        dataContainer.innerHTML = "";

        for (let i = 0; i < beers.length; i++) {

            dataContainer.innerHTML += `
                                    <div class = "beers">
                                        <a href="details.html?id=${beers[i].id}">
                                            <img alt="Picture of ${beers[i].name}" src="${beers[i].image_url}">
                                            <p>ABV ${beers[i].abv}%</p>
                                            <h2>${beers[i].name}</h2>
                                        </a>
                                    </div>
                                    `
        }

    } catch (error) {
        console.log(error);
        dataContainer.innerHTML = message("error", error);
    }
}

fetchBeers();