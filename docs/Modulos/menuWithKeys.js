// const menuWithKeys = () => {
//     const menu = document.getElementById('menu');
//     const arrayOfSection = menu.getElementsByClassName('nav-link');
//     Array.from(arrayOfSection).forEach((element, i) => {
//       document.addEventListener('keyup', (event) => {
//         if (Number(event.key - 1) === i) {
//           element.click();
//         }
//       });
//     });
//   };

//   menuWithKeys();

  const addScrollNavigationWithKeys = () => {

    const navBarLinks = document.getElementById("navbarSupportedContent").getElementsByClassName("nav-link active");
  
    [...navBarLinks].forEach((link,i) => {
      document.addEventListener('keyup', (event) => {
        let code = Number(event.code.slice(-1))-1;
        if (code === i) {
         link.click();
        }
      })
    })
  }




  