const changePositions = () => {
    const arrayOfImgs = [...document.getElementsByClassName('imgs')];
    const randomNumber = Math.floor(Math.random() * 9);
    const randomNumber2 = Math.floor(Math.random() * 9);
    arrayOfImgs[randomNumber].after(arrayOfImgs[randomNumber2]);
};

export {changePositions}

  