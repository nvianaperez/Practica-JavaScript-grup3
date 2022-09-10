import * as countries from './arrayOfCountries.js';

let score = 0;
var countryR;
export const getCountry = async () => {
  //GET A RANDOM COUNTRY BY RANDOM VALUE OF THE LIST
  const value = countries.countryCodeList[randomCountryCode()];

  let result;
  const response = fetch('https://countries.trevorblades.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
          {
              country(code: "${value}"){
                name
                native
                capital
                emoji
                currency
                languages {
                  code
                  name
                }
              }
            }
          `,
    }),
  });

  const data = await response;
  await data.json().then(({ data: { country } }) => {
    console.log(country);
    countryR = country;
    printCountry(country);
  });
  return countryR;
};

function printCountry(result) {
  printAnwerAndQuestion(getIdOfQuestion(), result);

  document.getElementById('button2').innerHTML = result.name;
  const opcionesIncorrectas = [
    ...document.getElementsByClassName('opcion-incorrecta'),
  ];
  opcionesIncorrectas.forEach(
    (opcion) => (opcion.innerHTML = countries.countryList[randomCountry()])
  );
  const buttons = [...document.getElementsByClassName('button')];
  buttons.forEach((button) => (button.disabled = false));
  changePositions();
  document.getElementById('elije').style.display = '';
}

// IF IT'S CORRECT OR NOT
const selectOption = (value1, value2) => {
  console.log(value1, value2);
  if (value1.toLowerCase() === value2.toLowerCase()) {
    const div = document.createElement('div');
    div.id = 'alertAnswer';
    div.className = 'alert alert-primary col-4';
    div.setAttribute('role', 'alert');
    div.innerHTML = 'CORRECTO!!';
    const buttons = [...document.getElementsByClassName('button')];
    buttons.forEach((button) => (button.disabled = true));

    document.getElementById('isCorrect').appendChild(div);
    document.getElementById('score').innerHTML = getScore(1);
  } else {
    const div = document.createElement('div');
    div.id = 'alertAnswer';
    div.className = 'alert alert-danger col-4';
    div.setAttribute('role', 'alert');
    document.getElementById('score').innerHTML = getScore(-1);

    div.innerHTML = 'INCORRECTO :(';
    document.getElementById('isCorrect').appendChild(div);
    setTimeout(() => {
      console.log('se borro');
      document.getElementById('alertAnswer').remove();
    }, 2500);
  }
};

// RANDOM POSITION OF THE BUTTONS

const changePositions = () => {
  const arrayOfButtons = [...document.getElementsByClassName('button')];
  const randomNumber = Math.floor(Math.random() * 4);
  const randomNumber2 = Math.floor(Math.random() * 4);
  const randomNumber3 = Math.floor(Math.random() * 4);
  const randomNumber4 = Math.floor(Math.random() * 4);
  arrayOfButtons[randomNumber].after(arrayOfButtons[randomNumber2]);
  arrayOfButtons[randomNumber3].after(arrayOfButtons[randomNumber4]);
  arrayOfButtons[randomNumber4].before(arrayOfButtons[randomNumber2]);
  arrayOfButtons[randomNumber].before(arrayOfButtons[randomNumber3]);
};

// GET A RANDOM COUNTRY FOR THE BUTTON ANSWERS

function randomCountry() {
  const randomNumber = Math.floor(Math.random() * 249);
  return randomNumber;
}
// GET A RANDOM COUNTRY THE SEND THE HTTP GET

function randomCountryCode() {
  const randomNumber = Math.floor(Math.random() * 249);
  return randomNumber;
}

// Type of question
function getIdOfQuestion() {
  const randomNumber = Math.floor(Math.random() * 3);
  return randomNumber;
}
// GET THE CURRENT SCORE O
function getScore(value) {
  return (score += value);
}

function printAnwerAndQuestion(value, answer) {
  console.log(value);
  switch (value) {
    case 0:
      document.getElementById('question').innerHTML =
        'De que pais es esta bandera ?';
      document.getElementById('flags').innerHTML = answer.emoji;
      break;
    case 1:
      document.getElementById('question').innerHTML =
        'De que pais es la siguiente capital ?';
      document.getElementById('flags').innerHTML = answer.capital;
      break;
    case 2:
      document.getElementById('question').innerHTML =
        'Que pais tiene como oficial el/ los siguientes lenguages ?';
      const lenguages =
        answer.languages.map((lang) => lang.name).join(',') + '.';
      document.getElementById('flags').innerHTML = lenguages;
      break;

    default:
      break;
  }
}

export { changePositions, getCountry as main, selectOption };