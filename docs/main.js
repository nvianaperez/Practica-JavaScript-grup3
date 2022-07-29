// import { menuWithKeys } from './menuWithKeys.js';
// import { changePositions } from './changePosition.js';
import { Application } from 'https://unpkg.com/@hotwired/stimulus/dist/stimulus.js';
import { KeynavController } from '../docs/keynav_controller.js';
const app = Application.start();
app.register('kn', KeynavController);
// const event = new KeynavController();
function main() {
  //   console.log('-hola-');
  //   menuWithKeys();
  //   setInterval(() => {
  //     changePositions();
  //   }, 2000);
  // event.connect();
}

const getCurrentWheather = async () => {
  let wheather;
  const reponse = await fetch(
    'https://api.openweathermap.org/data/2.5/weather?lat=41.393309729498235&lon=2.1520675588118685&appid=b6411eaff9ca5fbd2bbbe36b0555425b&units=metric'
  );
  const data = reponse.json();
  console.log(data);
  data.then((value) => {
    console.log(value);
    const wheatherSpan = document.getElementById('currentWheader');
    const parraf = document.createElement('p');
    parraf.id = 'parraf';
    parraf.className = 'text-of-clima';
    parraf.innerHTML = ` The current wheather in ${value.name} is: ${value.weather[0].description}. The temperature is ${value.main.temp} C° <span style='font-size:15px;'>&#128560;</span>. Max: ${value.main.temp_max}C°  Min : ${value.main.temp_min}C° . The humidity is ${value.main.humidity} %.  `;
    wheatherSpan.appendChild(parraf);
  });
};

getCurrentWheather();

main();
