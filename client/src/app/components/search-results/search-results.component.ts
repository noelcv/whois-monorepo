import { AsyncPipe, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { DisplayFavorites } from 'src/app/store/actions/ui.actions';
import {
  AddDomainToWatchList,
  GetWatchList,
  RemoveFromWatchList,
} from 'src/app/store/actions/watchlist.actions';
import { IAppState } from 'src/app/store/states/app.state';
import { IDomainState } from 'src/app/store/states/domain.state';
import { IDomainResult } from 'src/app/types/domainResult.interface';
import { IParsedDomain } from 'src/app/types/parsedDomain.interface';
import { domainMapper } from 'src/app/utils/domainMapper';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  standalone: true,
  styleUrls: [],
  imports: [AsyncPipe, NgIf, SpinnerComponent],
})
export class SearchResultsComponent implements OnInit {
  @Input()
  isLoading = false;
  parsedData: string | undefined;
  domainResult$ = this._store.pipe(select('domain'));
  displayUI$ = this._store.pipe(select('display'));
  displayFavorites$ = this._store.pipe(select('displayFavorites'));

  selectedDomain: IParsedDomain | undefined = undefined;
  selectedFavorite$ = this._store
    .pipe(select('watchList'))
    .subscribe(domain => {
      if (domain.selectedFavorite) {
        this.selectedDomain = domain.selectedFavorite;
      }
    });

  parse(data: IDomainResult | undefined): string {
    return JSON.stringify(data, null, 2);
  }
  addToWatchList(domainResult$: any) {
    const payload: string = domainResult$.actionsObserver._value.payload;
    const objectToStore = domainMapper(payload);
    this._store.dispatch(new AddDomainToWatchList(objectToStore));
    this._store.dispatch(new GetWatchList());
  }

  removeFromWatchList(selectedDomain: IParsedDomain | undefined) {
    if (selectedDomain) {
      this._store.dispatch(new RemoveFromWatchList(selectedDomain));
      this._store.dispatch(new DisplayFavorites(false));
    }
  }

  constructor(private _store: Store<IAppState>) {}

  ngOnInit(): void {
    this.domainResult$.subscribe((data: IDomainState) => {
      if (data.domainResult) {
        this.parsedData = this.parse(data.domainResult);
      }

      this.parsedData === '{}'
        ? (this.isLoading = true)
        : (this.isLoading = false);
    });
  }
}
