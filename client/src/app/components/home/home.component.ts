import { Component, OnInit } from '@angular/core';
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
  ],
  styleUrls: [],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
