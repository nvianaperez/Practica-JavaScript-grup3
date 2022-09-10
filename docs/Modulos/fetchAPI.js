import { Service } from "../services/service.js";
class WeatherService extends Service {
    API_KEY = "a67b6bdaf54850e16cdd614208416c5d"
    constructor(){
        super()
    }
    
    getCountryGraph (code) {
        const query =`query ($code: ID!) {
            country(code: $code) {
              code
              name
              capital
              emoji
              languages  {
                  name
              }
            }
            }`
        const body = {query: query, variables: {code: "AR"}}
        return super.postData("https://countries.trevorblades.com/", body)
    }

    getCurrentWheather = (lat, long) => {
       
          return super.getData(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=b6411eaff9ca5fbd2bbbe36b0555425b&units=metric`
          );
          
       
    };

    getWeatherFor16Days () {
        return super.getData(`https://api.openweathermap.org/data/2.5/forecast?lat=${String(35)}&lon=${String(129)}&cnt=16&appid=${this.API_KEY}`) 
    }   
}

export {WeatherService}