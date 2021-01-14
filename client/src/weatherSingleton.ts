import { JsxEmit } from "typescript";

export class weatherSingleton {
    private static instance: weatherSingleton;
    private api_key: string;
    private url_base: string;
    private city: string;
    private state: string;

    private constructor(){
        this.api_key = '38999729e8c4a9563ab7381ed0187db1';
        this.url_base = 'https://api.openweathermap.org/data/2.5/';
        this.city = 'New York City';
        this.state = 'New York';
    }

    // create new instance only when there isn't already an instance 
    public static getInstance(): weatherSingleton {
        if (!weatherSingleton.instance) {
            weatherSingleton.instance = new weatherSingleton();
        }
        return weatherSingleton.instance;
    }

    public static getWeather(){
        fetch(`${this.url_base}weather?q=${this.state},${this.city}&units=imperial&APPID=${this.api_key}`)
            .then(res => {
                return res.json();
            }).then(this.setResults);
    }

    public getCity(): String {
        return this.city;
    }

    public getState(): String {
        return this.state;
    }

    public setCity(inputCity: string){
        this.city = inputCity;
    }

    public setState(state: string){
        this.state = state;
    }

}