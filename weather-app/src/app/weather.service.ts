import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {resolve} from "@angular/compiler-cli";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = '47bdd22832aa91c7ba1cf4f40dc126d3';


  constructor(private http: HttpClient) {
  }



  getWeather(lat:string, lng:string){
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${this.apiKey}&units=metric`);
  }
  ;
  getWeatherByCity(city:string){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`);
  }
  ;
  getWeatherForecast(lat:string, lng:string){
    return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&cnt=15&appid=${this.apiKey}&units=metric`);
  }
  getWeatherForecastByCity(city:string){
    return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=14&appid=${this.apiKey}&units=metric`);
  }

}
