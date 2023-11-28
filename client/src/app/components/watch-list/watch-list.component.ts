
import { Component, Input, OnInit, signal } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {
  DisplayFavorites,
  DisplayResults,
} from 'src/app/store/actions/ui.actions';
import { SelectFromWatchList } from 'src/app/store/actions/watchlist.actions';
import { IAppState } from 'src/app/store/states/app.state';
import { IParsedDomain } from 'src/app/types/parsedDomain.interface';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  imports: [],
  standalone: true,
  styleUrls: [],
})
export class WatchListComponent implements OnInit {
  @Input()
  watchList$ = this._store.pipe(select('watchList'));
  watchListDomains: IParsedDomain[] = [];
  watchListCounter = signal(0);

  watchListHandler(favorite: IParsedDomain) {
    this._store.dispatch(new DisplayResults(false));
    this._store.dispatch(new DisplayFavorites(true));
    this._store.dispatch(new SelectFromWatchList(favorite));
  }

  constructor(private _store: Store<IAppState>) {}

  ngOnInit(): void {
    this._store.pipe(select('watchList')).subscribe(data => {
      this.watchListDomains = data.myWatchList;
      this.watchListCounter.set(this.watchListDomains.length);
    });
  }
}
