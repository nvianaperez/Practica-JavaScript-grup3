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

  menuWithKeys();
  