import WeatherCard from "./weatherCard.js"
async function Weather (service) {
    
    const data = await service.getWeatherFor16Days()
    
    const rebanador = function* (begin, limit)  {
        let c = begin
        while( c < limit ) {
            yield data.list[c]
            c++
        }
    };

    const carousel_items = document.querySelectorAll(".carousel-item")

    const firstDataRecoveredFromAPI = rebanador(0, 4);    
    
    const rebanada = [...firstDataRecoveredFromAPI];
    
    carousel_items.forEach((element, index) => {
       
       element.innerHTML = `<div class="card container-fluid text-center">
       <div class="row text-right">
           <p class="card-text text-dark col">${rebanada[index].dt_txt}</p>
       </div>
       <div class="row row-cols-1">
           <h5 class="card-title text-dark">Tº${rebanada[index].weather[0].icon} ${rebanada[index].main.temp}</h5>
           <p class="card-text text-dark col-12 text-center">feels like: ${rebanada[index].main.feels_like}</p>
       </div>
       <div class="row row-cols-3 ">
           <p class="card-text text-center text-dark col">Hum ${rebanada[index].main.humidity}</p>
           <p class="card-text text-center text-dark col">${rebanada[index].weather[0].description}</p>
           <p class="card-text text-center text-dark col">${rebanada[index].main.sea_level}</p>
       </div>
       </div>` 
    });

    const carousel_next = document.querySelector(".extend-weather")
    
    carousel_next.addEventListener("click", (e) => {
         
        const result = rebanador(carousel_items.length + 1, carousel_items.length + 5)

        // console.log([...result])
        WeatherCard([...result])
    })
    
}

export default Weather;