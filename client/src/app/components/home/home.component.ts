import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GeolocationService } from 'src/app/services/geolocation/geolocation.service';
import { HeaderComponent } from '../header/header.component';
import { SearchbarComponent } from '../search-bar/search-bar.component';
import { SearchResultsComponent } from '../search-results/search-results.component';
import { WatchListComponent } from '../watch-list/watch-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    HeaderComponent,
    WatchListComponent,
    SearchbarComponent,
    SearchResultsComponent,
    NgIf,
  ],
  styleUrls: [],
})
export class HomeComponent implements OnInit {
  location$: unknown;

  constructor(geo: GeolocationService) {
    geo.init();

    geo.locationObservable.subscribe((location: unknown) => {
      this.location$ = location;
    });
  }

  ngOnInit(): void {}
}
