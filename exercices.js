// EJERCICIO 1 --> función que muestra la hora local en una alerta cuando la página se carga
// Buscar información sobre el evento "ready"
// ■ Escribir un script en vuestra página, que cuando esté cargada muestre una
// alerta (window.alert) con la hora actual.

function showLocalTimeWhenPageLoaded () {
    // let date = new Date().toLocaleTimeString;
    document.addEventListener ('load', (event) => {
        window.alert(date);
        window.alert (new Date.toLocaleTimeString());
    })
}

// EJERCICIO 2 --> 
// Escribir un script en vuestra página, que cuando esté cargada registre un listener a
// cada div, para que en el evento "mouseover" ponga un borde visible de color, y en el
// evento "mouseout" lo quite. Pero sólo si se está pulsando la tecla "Alt" del teclado.
// ■ Asegurarse de tener dos "div"s uno dentro de otro (de medidas diferentes).
// Observar i describir que pasa a los divs, como reaccionan cuando ambos tienen
// que gestionar el evento.

function changeBorderColorWhenMouseOverAndAltKey () {

    // variable que recoge todos los divs del document
    const divs = document.getElementsByTagName('div'); //divs no es un array, entonces apra recorrerlo for of
    console.log(divs);
    // recorrer esta variable añadiendo dos eventListeners: uno para mouseOver que añade el borde y otro mouseOut que lo quita
    //mejor añadiendo y quitando clases, que con style
    for (let div of divs) {
        div.addEventListener
    }

}
