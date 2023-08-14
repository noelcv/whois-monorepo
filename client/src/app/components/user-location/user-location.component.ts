import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { IUserLocation } from 'src/app/services/geolocation/geolocation.interface';
import { GeolocationService } from 'src/app/services/geolocation/geolocation.service';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/states/app.state';

@Component({
  selector: 'app-user-location',
  templateUrl: './user-location.component.html',
  styleUrls: ['./user-location.component.css'],
  imports: [NgIf],
  standalone: true,
})
export class UserLocationComponent {
  location$: IUserLocation | undefined;

  constructor(geo: GeolocationService, private _store: Store<IAppState>) {
    geo.init();

    this._store
      .pipe(select('location'))
      .subscribe((location: IUserLocation) => {
        this.location$ = location as unknown as IUserLocation;
      });
  }
}
