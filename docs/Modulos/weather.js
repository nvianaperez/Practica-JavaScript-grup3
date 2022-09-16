import WeatherCard from "./weatherCard.js";

async function Weather(service) {

    const data = await service.getWeatherFor16Days()

    const rebanador = function* (begin, limit) {
        let c = begin
        while (c < limit) {
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
async function WeatherFake(service) {


    let response;
    navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;

        response = await service.getCurrentWheather(lat, long) //Llamamos la API y nos devolvera una promesa sin resolver

    });
    console.log(response)

    const value = await response.json(); //Resolvemos la promesa para convertirla en un objeto JSON


    const wheatherSpan = document.getElementById('currentWheader'); //Cogemos el elemento por ID
    const parraf = document.createElement('p'); //Creamos un elemento paragraph

    parraf.id = 'parraf'; //Asignamos un ID al elemento paragraph

    parraf.className = 'text-of-clima'; //Asignamos una clase al paragraph

    //Asignaremos un texto de tipo HTML a nuestro paragraph **con comillas invertidas o backticks** 
    //con el fin de poder insertar valores dentro del texto
    parraf.innerHTML = ` The current wheather in ${value.name} is: ${value.weather[0].description}. 
        The temperature is ${value.main.temp} C° <span style='font-size:15px;'>&#128560;</span>. 
        Max: ${value.main.temp_max}C°  
        Min : ${value.main.temp_min}C° . The humidity is ${value.main.humidity} %.  `;

    wheatherSpan.appendChild(parraf); //Insertamos el parrafo dentro del eLemento padre previamente conseguido




}
export { Weather, WeatherFake };