function WeatherCard (array) {
    const carousel_inner = document.querySelector(".carousel-inner");
    
    array.forEach((element, index) => {
        console.log("element", element)
        const card = document.createElement("div");
        card.className = "card text-bg-dark carousel-item"
        
        const html = 
            `<div class="card container-fluid text-center">
                <div class="row text-right">
                    <p class="card-text text-dark col">${element.dt_txt}</p>
                </div>
                <div class="row row-cols-1">
                    <h5 class="card-title text-dark">Tº ${element.weather[0].icon}${element.main.temp}</h5>
                    <p class="card-text text-dark col-12 text-center">feels like: ${element.main.feels_like}</p>
                </div>
                <div class="row row-cols-3 ">
                    <p class="card-text text-center text-dark col">Hum:${element.main.humidity}</p>
                    <p class="card-text text-center text-dark col">${element.weather[0].description}</p>
                    <p class="card-text text-center text-dark col">${element.main.sea_level}</p>
                </div>
             </div>`;
        
        card.innerHTML = html;

        const carousel_items = document.querySelectorAll(".carousel-item")

        addIndicator(carousel_items.length)

        carousel_inner.appendChild(card);
    });
};

function addIndicator (indexBegin) {
    const carousel_indicators = document.querySelector(".carousel-indicators");
    
    const indicator = document.createElement("li");

    indicator.setAttribute("data-bs-target", "#carouselDark");
    indicator.setAttribute("data-bs-slide-to", indexBegin);

    carousel_indicators.appendChild(indicator)
}

export default WeatherCard;