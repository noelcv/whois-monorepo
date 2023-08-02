import { Injectable, Signal, signal } from '@angular/core';
import { Subject } from 'rxjs';

export interface ILocation {
  latitude: string;
  longitude: string;
}
@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  location: ILocation = { latitude: '0', longitude: '0' };
  locationObservable = new Subject();
  constructor() {}

  private getUserLocation(): void {
    const success = (position: any): void => {
      const location: ILocation = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      this.location = location;
      const locationStr = JSON.stringify(location);
      this.locationObservable.next(locationStr);
    };

    function err() {
      console.log('error', err);
      return err;
    }
    navigator.geolocation.getCurrentPosition(success, err);
  }

  public init(): void {
    this.getUserLocation();
  }
}
