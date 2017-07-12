import { Component } from '@angular/core';
import { MedianService } from './median.service';

@Component({
  selector: 'temperature-monitor',
  templateUrl: './app/temperaturemonitor.component.html'
})

export class TemperatureMonitorComponent {
  temperature;
  
  temperatureArr: number[] = new Array();
  
  median = 0;

  temperatureAlertMessage = '';

  medianAlertMessage = '';

  showTemperatureAlert = false;

  showMedianAlert = false;
  progressBarPercent = '0%';
  
  constructor(private medianService : MedianService){}
  
  clear(){
    this.temperatureArr = new Array();
    
    this.median = 0;
  
    this.temperatureAlertMessage = '';
  
    this.medianAlertMessage = '';
  
    this.showTemperatureAlert = false;
  
    this.showMedianAlert = false;
    this.progressBarPercent = '0%';
  }
  
  recordTemperature(){
    if((this.temperature || this.temperature == 0) && this.temperatureArr.length < 8){
      this.temperatureArr.push(this.temperature);
      var progressBar = this.temperatureArr.length*100/8;
      this.progressBarPercent = progressBar + '%';
      this.temperature = null;
      this.showTemperatureAlert = false;
    } else if (this.temperatureArr.length >= 8){
      this.temperatureAlertMessage = 'Array length Exceeded!';
      this.showTemperatureAlert = true;
    } else {
      this.temperatureAlertMessage = 'Enter a valid integer.';
      this.showTemperatureAlert = true;
    }
  }
  
  getCurrentMedian(){
    if(this.temperatureArr.length > 0){
      var tempArray = this.temperatureArr;
      this.median = this.medianService.calculateMedian(tempArray);
      this.showMedianAlert = false;
    } else {
      this.medianAlertMessage = "Please enter some values.";
      this.showMedianAlert = true;
    }
  }
}