const getCurrentWheather = () => {
  navigator.geolocation.getCurrentPosition(async (position) => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;

    const reponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=b6411eaff9ca5fbd2bbbe36b0555425b&units=metric`
    );
    const data = reponse.json();
    console.log(data);
    data
      .then((value) => {
        console.log(value);
        const wheatherSpan = document.getElementById('currentWheader');
        const parraf = document.createElement('p');
        parraf.id = 'parraf';
        parraf.className = 'text-of-clima';
        parraf.innerHTML = ` The current wheather in ${value.name} is: ${value.weather[0].description}. The temperature is ${value.main.temp} C° <span style='font-size:15px;'>&#128560;</span>. Max: ${value.main.temp_max}C°  Min : ${value.main.temp_min}C° . The humidity is ${value.main.humidity} %.  `;
        wheatherSpan.appendChild(parraf);
      })
      .catch((error) => showError(error));
  });
};

export { getCurrentWheather };
