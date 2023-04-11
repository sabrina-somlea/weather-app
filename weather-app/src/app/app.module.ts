import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { WeatherComponent } from './weather/weather.component';
import {WeatherService} from "./weather.service";
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { HoursForecastComponent } from './hours-forecast/hours-forecast.component';
import{MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatLegacyFormFieldModule} from "@angular/material/legacy-form-field";
import {MatLegacyInputModule} from "@angular/material/legacy-input";
import {MatCardModule} from "@angular/material/card";
import {MatTooltipModule} from "@angular/material/tooltip";



@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    HeaderComponent,
    HoursForecastComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatLegacyFormFieldModule,
    MatLegacyInputModule,
    MatCardModule,
    MatTooltipModule
  ],
  providers: [WeatherService,HoursForecastComponent,],
  bootstrap: [AppComponent]
})
export class AppModule { }
