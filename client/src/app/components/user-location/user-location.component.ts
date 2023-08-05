import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { IUserLocation } from 'src/app/services/geolocation/geolocation.interface';
import { GeolocationService } from 'src/app/services/geolocation/geolocation.service';

@Component({
  selector: 'app-user-location',
  templateUrl: './user-location.component.html',
  styleUrls: ['./user-location.component.css'],
  imports: [NgIf],
  standalone: true,
})
export class UserLocationComponent {
  location$: IUserLocation | undefined;

  constructor(geo: GeolocationService) {
    geo.init();

    geo.locationObservable.subscribe((location: unknown) => {
      this.location$ = location as unknown as IUserLocation;
    });
  }
}
