import { Injectable } from '@angular/core';

Injectable()
export class MedianService {
    calculateMedian(temperatureArr){
        temperatureArr = temperatureArr.sort();
        var len = temperatureArr.length;
        console.log(temperatureArr[len-1]);
        var median = 0;
        if(len%2){
            median = temperatureArr[len/2];
        } else {
            median = (temperatureArr[len/2] + temperatureArr[(len/2)-1]) / 2;
        }
        return median;
    }
}