import { Component, OnInit } from '@angular/core';
import { IUserLocation } from 'src/app/services/geolocation/geolocation.interface';
import { HeaderComponent } from '../header/header.component';
import { SearchbarComponent } from '../search-bar/search-bar.component';
import { SearchResultsComponent } from '../search-results/search-results.component';
import { WatchListComponent } from '../watch-list/watch-list.component';
import { UserLocationComponent } from '../user-location/user-location.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  styleUrls: [],
  imports: [
    HeaderComponent,
    WatchListComponent,
    SearchbarComponent,
    SearchResultsComponent,
    UserLocationComponent,
  ],
})
export class HomeComponent implements OnInit {
  location$: IUserLocation | undefined;

  constructor() {}

  ngOnInit(): void {}
}
