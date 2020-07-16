import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


import { AgmCoreModule,GoogleMapsAPIWrapper } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    AgmCoreModule.forRoot({ // @agm/core
      apiKey: 'AIzaSyAQvnNxfIPJ1iMm7maHuOsswOa4bP3pcOs',
    }),
    AgmDirectionModule,      // agm-direction
     ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:[GoogleMapsAPIWrapper]
})
export class AppModule { }
