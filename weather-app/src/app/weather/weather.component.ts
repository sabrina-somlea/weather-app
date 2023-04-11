import {ChangeDetectorRef, Component, NgZone, OnInit} from '@angular/core';
import {WeatherService} from "../weather.service";
import {HoursForecastComponent} from "../hours-forecast/hours-forecast.component";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
city!: string;
weatherData: any;
lat: any;
lng: any;
favorites: any[] = [];





constructor (private weatherService:WeatherService, public forecastComponent:HoursForecastComponent,private changeDetectorRef: ChangeDetectorRef, private ngZone: NgZone){}


  public ngOnInit() {
    this.getLocation();

  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        if (position) {
          console.log("Latitude: " + position.coords.latitude + "Longitude: " + position.coords.longitude);
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          console.log(this.lat);
          console.log(this.lng);
          this.weatherService.getWeather(this.lat,this.lng).subscribe(data => {
            this.weatherData = data;
          });
        }
      }, (error: any) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  // getWeatherByCity(){
  //     this.weatherService.getWeatherByCity(this.city).subscribe(data=>{
  //       this.weatherData=data;
  //       console.log(data);
  //     })
  //   console.log("dupa primu city: "+this.weatherData);
  // }

  async getWeatherByCity() {
    try {
      const data = await this.weatherService.getWeatherByCity(this.city).toPromise();
      this.weatherData = data;
      console.log(this.weatherData);
      this.ngZone.run(() => this.changeDetectorRef.detectChanges());
      // apelati getForecastByOtherLocation() din componenta HoursForecastComponent cu noul oras:
      this.forecastComponent.getForecastByOtherLocation(this.city);
    } catch (error) {
      console.log("eroare la preluarea datelor despre vreme: " + error);
    }
  }

  addToFavorites() {
    const favorite = {
      name: this.weatherData.name,
      id: this.weatherData.id,
    };
    this.favorites.push(favorite);
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
  // getForecastByOtherLocation(){
  //   this.forecastComponent.getForecastByOtherLocation()
  //   };

  getWeatherAndForecastByCity() {
    this.getWeatherByCity();
    this.forecastComponent.getForecastByOtherLocation(this.city);
  }

  }







