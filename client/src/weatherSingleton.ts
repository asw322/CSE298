import { JsxEmit } from "typescript";

export class WeatherSingleton {
    private static instance: WeatherSingleton;
    // private static results: {"coord":{"lon":-74.006,"lat":40.7143},"weather":[{"id":804,
    //                         "main":"Clouds","description":"overcast clouds","icon":"04n"}],
    //                         "base":"stations","main":{"temp":43.18,"feels_like":36.39,"temp_min"
    //                         :41,"temp_max":45,"pressure":1011,"humidity":65},"visibility":10000,
    //                         "wind":{"speed":5.75,"deg":50},"clouds":{"all":90},"dt":1610674080,
    //                         "sys":{"type":1,"id":4610,"country":"US","sunrise":1610626687,
    //                         "sunset":1610661109},"timezone":-18000,"id":5128581,"name":
    //                         "New York","cod":200};

    private static api_key: string = '38999729e8c4a9563ab7381ed0187db1';
    private static url_base: string = 'https://api.openweathermap.org/data/2.5/';

    // By default set to new your city
    private static city: string = 'New York City';
    private static state: string = 'New York';

    // private static temp: number = 0;
    // private static min_temp: number = 0;
    // private static max_temp: number = 0;
    // private static description: string = "Error";

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

    // public static getWeather() {
    //     // var results = {main: {temp: 0, temp_min: 0, temp_max: 0}};
    //     fetch(this.url_base + "weather?q=" 
    //             + this.state + "," + this.city 
    //             + "&units=imperial&APPID=" + this.api_key)
    //         .then(response => { 
    //             if (!response.ok) {
    //                 // console.log("error");
    //                 throw new Error('Network response was not ok');
    //             }
    //             console.log(response.json());
    //             // this.results = response.json();
    //             return response.json();
    //         })
    //         // .then(data => {
    //         //     return data;
    //         // })
    //         .catch(error => {
    //             console.error('There has been a problem with your fetch operation:', error);
    //         });
    //     // this.setMaxTemp(results.main.temp_max);
    //     // this.setMaxTemp(results.main.temp_min);
    //     // return results;
    // }

    public static getURL(): string{
        return this.url_base + "weather?q=" 
                + this.state + "," + this.city 
                + "&units=imperial&APPID=" + this.api_key;
    }
    
    public static getCity(): string {
        return this.city;
    }

    public static getState(): string {
        return this.state;
    }

    public static setCity(inputCity: string){
        this.city = inputCity;
    }

    public static setState(inputState: string){
        this.state = inputState;
    }

    // public static setMaxTemp(input: number){
    //     this.max_temp = input;
    // }

    // public static setMinTemp(input: number){
    //     this.min_temp = input;
    // }

    // public static setDesc(input: string){
    //     this.description = input;
    // }

}