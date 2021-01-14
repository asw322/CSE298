import { JsxEmit } from "typescript";

export class WeatherSingleton {
    private static instance: WeatherSingleton;

    private static api_key: string = '38999729e8c4a9563ab7381ed0187db1';
    private static url_base: string = 'https://api.openweathermap.org/data/2.5/';

    // By default set to new your city
    private static city: string = 'New York City';
    private static state: string = 'New York';

    private constructor(){
        // Empty
    }

    // create new instance only when there isn't already an instance 
    public static getInstance(): WeatherSingleton {
        if (!WeatherSingleton.instance) {
            WeatherSingleton.instance = new WeatherSingleton();
        }
        return WeatherSingleton.instance;
    }

    // https://api.openweathermap.org/data/2.5/weather?q=New York,New York&units=imperial&APPID=38999729e8c4a9563ab7381ed0187db1

    public static getWeather() {
        fetch(this.url_base + "weather?q=" + this.state + "," + this.city + "&units=imperial&APPID=" + this.api_key)
            .then(response => { 
                return response.json()
            })
            .then(data => console.log(data));
    }
    
    public static getCity(city: string): String {
        return this.city;
    }

    public static getState(state: string): String {
        return this.state;
    }

    public static setCity(inputCity: string){
        this.city = inputCity;
    }

    public static setState(state: string){
        this.state = state;
    }

}