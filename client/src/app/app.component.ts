import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EffectsRootModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { Store, select, StoreRootModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './components/home/home.component';
import { IAppState } from './store/states/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    HomeComponent,
    AsyncPipe,
    RouterOutlet,
    StoreRootModule,
    EffectsRootModule,
    StoreRouterConnectingModule,
    StoreDevtoolsModule
],
  standalone: true,
})
export class AppComponent implements OnInit {
  title = 'whois';
  apiUrl = environment.apiUrl;
  domainResult$ = this._store.pipe(select('domain'));
  watchList$ = this._store.pipe(select('watchList'));

  constructor(private _store: Store<IAppState>) {}

  ngOnInit() {}
}
