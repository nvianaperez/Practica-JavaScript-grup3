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

    const iterator = rebanador(0, 4);    
    console.log([...iterator]);

    const carousel_next = document.querySelector(".extend-weather")
    
    carousel_next.addEventListener("click", (e) => {
        const carousel_items = document.querySelectorAll(".carousel-item")
         
        const result = rebanador(carousel_items.length + 1, carousel_items.length + 5)

        // console.log([...result])
        WeatherCard([...result])
    })
    
}

export default Weather;