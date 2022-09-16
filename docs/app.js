import "./Modulos/alertFecha.js";
import "./Modulos/menuWithKeys.js";
import { changePositions } from './Modulos/changePositions.js';
import { WeatherService } from "./Modulos/fetchAPI.js";
import {Weather, WeatherFake} from "./Modulos/weather.js";
// import {rebanador} from "./Modulos/rebanador.js"

//importamos un pequeño framework Stimulus
import { Application } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"; //importamos el punto de arranque de la biblioteca Stimulus
import { KeyNavController } from "./Modulos/keynav_controller.js";

const app = Application.start() //iniciamos Stimulus

app.register("kn", KeyNavController); //asociamos la marca kn al controller específico

//creamos una instancia del servicio del tiempo 
const weather = new WeatherService();

//pasamos la instancia del servicio del tiempo para llamar a la API y procesar los datos, 
// Aqui utlizaremos dos formas distintas para mostrar dos cosas distintas
Weather(weather) //#1
WeatherFake(weather) //#2

// cambiamos la posiscion de las imagenes de manera aleatoria cada 2 segundos
(function ChangeImagePositionsRandomlywithIntervals() {
    setInterval(() => {
      changePositions();
    }, 2000);
  })()


  

