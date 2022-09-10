import * as getCountries from './getCountry.js';

const getcountries = getCountries.main;
let countryR;
getcountries().then((data) => (countryR = data));

const value = getCountries.value;

let score = getCountries.score;

document.getElementById('jugar').addEventListener('click', () => {
  getcountries().then((data) => (countryR = data));
});

document.querySelectorAll('#buttons').forEach((button) =>
  button.addEventListener('click', (event) => {
    let resp = event.target.outerText;
    // return getCountries.selectOption(ev)
    return getCountries.selectOption(resp, countryR.name);
  })
);
document.querySelector('#button2').addEventListener('click', (event) => {
  let resp = event.target.outerText;
  let nextGame = getCountries.main;
  setTimeout(() => {
    document.getElementById('alertAnswer').remove();

    nextGame().then((data) => (countryR = data));
  }, 2500);
  return getCountries.selectOption(resp, countryR.name);
  console.log(countryR);
});