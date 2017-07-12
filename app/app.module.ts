import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemperatureMonitorComponent } from './temperaturemonitor.component';
import { MedianService } from './median.service';

@NgModule({
  declarations: [
    AppComponent, 
    TemperatureMonitorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ MedianService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
