// const body = document.body;
// const handleSubmit = document.getElementById('submitForm');

// handleSubmit.addEventListener('click', (e) => {
//   e.preventDefault();
//   let modal = document.createElement('div', 'succesSubscription');
//   modal.style.width = '100vw';
//   modal.style.height = '100vh';
//   modal.style.backgroundColor = 'rgb(54 36 63 / 90%)';
//   modal.style.zIndex = 2000;
//   modal.style.position = 'absolute';
//   modal.style.top = '353vh';
//   modal.style.left = '0';
//   modal.style.display = 'flex';
//   modal.style.alignItems = 'center';
//   modal.style.justifyContent = 'center';

//   let textContainer = document.createElement('div');
//   textContainer.style.width = '50%';
//   textContainer.style.height = '20%';
//   textContainer.style.fontSize = '52px';
//   textContainer.style.fontWeight = 'bold';
//   textContainer.style.textAlign = 'center';
//   textContainer.style.color = 'yellow';
//   textContainer.innerText = 'Checking email validation';

//   modal.appendChild(textContainer);
//   setTimeout(() => {
//     body.appendChild(modal);
//   }, 500);
//   setTimeout(() => {
//     textContainer.innerText = 'Thanks, You are suscribed now !';
//     setTimeout(() => {
//       modal.remove();
//     }, 1000);
//   }, 1500);
// });

/**
 * AGUSTIN
 *
 */
const menuWithKeys = () => {
  const menu = document.getElementById('menu');
  const arrayOfSection = menu.getElementsByClassName('nav-link');
  Array.from(arrayOfSection).forEach((element, i) => {
    document.addEventListener('keyup', (event) => {
      if (Number(event.key - 1) === i) {
        element.click();
      }
    });
  });
};

const changePositions = () => {
  const arrayOfImgs = [...document.getElementsByClassName('imgs')];
  const randomNumber = Math.floor(Math.random() * 9);
  const randomNumber2 = Math.floor(Math.random() * 9);
  arrayOfImgs[randomNumber].after(arrayOfImgs[randomNumber2]);
};
menuWithKeys();
setInterval(() => {
  changePositions();
}, 2000);

/*
 _______________________________________|___________________________________________
|____________________________________---*---________________________________________|
|_______________________________________|___________________________________________|
|_______________________________________|___________________________________________|

*/
