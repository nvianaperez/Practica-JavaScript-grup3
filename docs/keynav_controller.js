import { Controller } from 'https://unpkg.com/@hotwired/stimulus/dist/stimulus.js';

class KeynavController extends Controller {
  connect() {
    console.log('I am alive!!', this.element);
  }
  follow(event) {
    let code = event.key;
    let number = Number(code - 1);

    let link = this.element.querySelectorAll('.nav-link')[number];
    link && link.click();
  }
}
export { KeynavController };
