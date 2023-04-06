import { Component } from '@angular/core';
import {WeatherService} from "../weather.service";

@Component({
  selector: 'app-hours-forecast',
  templateUrl: './hours-forecast.component.html',
  styleUrls: ['./hours-forecast.component.css']
})
export class HoursForecastComponent {
  city!: string
  weatherData: any;
  lat: any;
  lng: any;
  dt_txt:any;
  constructor (private weatherService:WeatherService){}


  public ngOnInit() {
    this.getForecastbyCurrentLocation();

  }
  getForecastbyCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        if (position) {
          console.log("Latitude: " + position.coords.latitude + "Longitude: " + position.coords.longitude);
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          console.log(this.lat);
          console.log(this.lng);
          this.weatherService.getWeatherForecast(this.lat,this.lng).subscribe(data => {
            this.weatherData = data;
          });
        }
      }, (error: any) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }















}
