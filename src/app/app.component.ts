import { Component } from '@angular/core';
import { Map } from 'mapbox-gl';
import GEO_CITY from '../assets/idn_city.geo.json.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  GEOJSON: any = GEO_CITY;
  indonesia = {
    latitde: 113.9213,
    longitude: 0.7893  
  };
  zoom = 4;
  hoverFilter = ['==', 'NAME_2', ''];
  selectedLatLong: any;
  selectedPoint: any;

  activateHoverOn(evt: any) {
    this.hoverFilter = ['==', 'NAME_2', evt.features[0].properties.NAME_2];
    this.selectedPoint = evt.features[0];
    this.selectedLatLong = evt.lngLat;
  }

  disableHover() {
    this.hoverFilter = ['==', 'NAME_2', ''];
  }
}
