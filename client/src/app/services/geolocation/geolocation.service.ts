import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, catchError, Observable, throwError, retry } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ILocationCoords {
  latitude: string;
  longitude: string;
}
@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  private BASE_URL = environment.baseUrl;
  location: ILocationCoords = { latitude: '0', longitude: '0' };
  locationObservable = new Subject();
  constructor(private http: HttpClient) {}

  private getUserLocation(): void {
    const success = (position: any): void => {
      const location: ILocationCoords = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      //TODO: send location coordinates for server-side processing
      try {
        console.log(`${this.BASE_URL}/location`);
        const response = this.geoLookUp(location).subscribe(location => {
          console.log('location from server', location);
        });
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

  private geoLookUp(location: ILocationCoords): Observable<any> {
    return this.http
      .post(`${this.BASE_URL}/location`, location)
      .pipe(retry(3), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.log('❌ An error occurred on the client side:', error.error);
    } else {
      console.error('❌ Something went south on the server side:', error.error);
    }
    return throwError(() => new Error('Try later, my friend'));
  }
}
