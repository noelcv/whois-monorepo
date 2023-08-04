import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, map } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ILocation {
  latitude: string;
  longitude: string;
}
@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  private BASE_URL = environment.apiUrl;
  location: ILocation = { latitude: '0', longitude: '0' };
  locationObservable = new Subject();
  constructor(private http: HttpClient) {}

  private getUserLocation(): void {
    const success = (position: any): void => {
      const location: ILocation = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      //TODO: send location coordinates for server-side processing
      try {
        const response = this.http
          .post(this.BASE_URL, {
            params: { lat: location.latitude, long: location.longitude },
            responseType: 'json',
          })
          .pipe(
            map(data => {
              return data;
            })
          );
        console.log('response from server', response);
      } catch (err) {
        if (!environment.production)
          console.log('Error sending location to server', err);
      }
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
