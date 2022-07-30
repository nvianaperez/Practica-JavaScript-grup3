import "./Modulos/alertFecha.js";
import "./Modulos/menuWithKeys.js";
import { WeatherService } from "./Modulos/fetchAPI.js";

//importamos un pequeño framework Stimulus
import { Application } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"; //importamos el punto de arranque de la biblioteca Stimulus
import { KeyNavController } from "./Modulos/keynav_controller.js";

const app = Application.start() //iniciamos Stimulus

app.register("kn", KeyNavController); //asociamos la marca kn al controller específico

const weather = new WeatherService();

const carousel_items = document.getElementsByClassName("carousel-item")

weather.getWeatherFor16Days().then(data => console.log("app"))





  