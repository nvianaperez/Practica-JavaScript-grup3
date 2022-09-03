import "./Modulos/alertFecha.js";
import "./Modulos/menuWithKeys.js";
import { WeatherService } from "./Modulos/fetchAPI.js";
import {Weather} from "./Modulos/weather.js";
// import {rebanador} from "./Modulos/rebanador.js"

//importamos un pequeño framework Stimulus
import { Application } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"; //importamos el punto de arranque de la biblioteca Stimulus
import { KeyNavController } from "./Modulos/keynav_controller.js";

const app = Application.start() //iniciamos Stimulus

app.register("kn", KeyNavController); //asociamos la marca kn al controller específico

//llamamos a la api del servicio del tiempo
const weather = new WeatherService();

//pasamos el array de informacion del tiempo a la funcion Weather
Weather(weather)

// const carousel_items = document.getElementsByClassName("carousel-item")

  