const url = "https://api.punkapi.com/v2/beers/";

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const detailContainer = document.querySelector(".beer-container");

async function fetchBeer() {
    try {
        const response = await fetch(url + params.get("id"));
        const beer = await response.json();
        console.log(beer[0]);
        
        document.title = beer[0].name;

        detailContainer.innerHTML = "";

        detailContainer.innerHTML += `
                                    <div class="beer">
                                        <h1>${beer[0].name}</h1>
                                        <img alt="Picture of ${beer[0].name}" src="${beer[0].image_url}">
                                        <h2>${beer[0].tagline}</h2>
                                        <p><b>About: </b>${beer[0].description}</p>
                                        <p><b>Brewers tips: </b>${beer[0].brewers_tips}</p> 
                                        <p><b>First brewed: </b>${beer[0].first_brewed}     
                                    </div>`;
    } catch (error) {
        console.log(error);
        detailContainer.innerHTML = message("error", error);

    }
}

fetchBeer();