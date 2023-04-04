import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey='47bdd22832aa91c7ba1cf4f40dc126d3';
  constructor(private http:HttpClient) { }
  // getWeather(city: string){
  //   return this.http.get('http://api.openweathermap.org/geo/1.0/direct?q={city}&appid={47bdd22832aa91c7ba1cf4f40dc126d3}')
  // }
  getWeather(){
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?lat=46.7667&lon=23.6&appid=47bdd22832aa91c7ba1cf4f40dc126d3');
  };

}
