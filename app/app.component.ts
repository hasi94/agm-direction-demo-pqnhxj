import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  lat: Number = 41.85
  lng: Number = -87.65

  origin = { lat: 29.8174782, lng: -95.6814757 }
  destination = { lat: 40.6976637, lng: -74.119764 }
  waypoints = [
     {location: { lat: 39.0921167, lng: -94.8559005 }},
     {location: { lat: 41.8339037, lng: -87.8720468 }}
  ]
}
