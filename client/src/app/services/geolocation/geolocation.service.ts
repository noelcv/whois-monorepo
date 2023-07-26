import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  constructor() {}

  private getUserLocation() {
    const success = (position: any): void => {
      return position;
    };

    function err() {
      return err;
    }
    navigator.geolocation.getCurrentPosition(success, err);
  }

  private parseLocation() {
    const location = this.getUserLocation();
    return JSON.stringify(location, null, 2);
  }

  public init() {
    return this.parseLocation();
  }
}
