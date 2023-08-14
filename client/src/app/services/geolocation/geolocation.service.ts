import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { catchError, Observable, throwError, retry } from 'rxjs';
import { SetUserLocation } from 'src/app/store/actions/location.actions';
import { IAppState } from 'src/app/store/states/app.state';
import { environment } from 'src/environments/environment';
import { ILocationCoords, IUserLocation } from './geolocation.interface';

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  private BASE_URL = environment.baseUrl;
  location: ILocationCoords = { latitude: '0', longitude: '0' };
  hasLocation = false;

  constructor(private http: HttpClient, private _store: Store<IAppState>) {
    this._store
      .pipe(select('location'))
      .subscribe((location: IUserLocation) => {
        return (this.hasLocation =
          location.country === '' && location.town === '' ? false : true);
      });
  }

  private getUserLocation(): void {
    const success = (position: any): void => {
      const location: ILocationCoords = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      try {
        this.geoLookUp(location).subscribe(location => {
          const userLocation = location as IUserLocation;
          this._store.dispatch(new SetUserLocation(userLocation));
        });
      } catch (err) {
        if (!environment.production)
          console.log('Error sending location to server', err);
      }
    };

    function err() {
      if (!environment.production) console.log('error', err);
      return err;
    }
    navigator.geolocation.getCurrentPosition(success, err);
  }

  public init(): void {
    // to prevent unnecessary queries,
    // only query location from server if one doesn't exist in the store;
    if (!this.hasLocation) this.getUserLocation();
  }

  private geoLookUp(location: ILocationCoords): Observable<unknown> {
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
