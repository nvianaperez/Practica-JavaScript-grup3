import {Controller} from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js";

class KeyNavController extends Controller {
    connect() {
        console.log("I am alive!!", this.element)
    }

    follow (event) {
        let number = Number(event.key)-1
        let link = this.element.querySelectorAll(".nav-link") [number]
        link && link.click()
    }
}

export {KeyNavController};