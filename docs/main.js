// import { menuWithKeys } from './menuWithKeys.js';
import { Application } from 'https://unpkg.com/@hotwired/stimulus/dist/stimulus.js';
import { KeyNavController } from '../docs/Modulos/keynav_controller.js';
import { getCurrentWheather } from '../docs/Modulos/weather.js';
import { changePositions } from '../docs/Modulos/changePositions.js';

const app = Application.start();
app.register('kn', KeyNavController);
getCurrentWheather();
setInterval(() => {
  changePositions();
}, 2000);
