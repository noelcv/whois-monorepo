import { Action } from '@ngrx/store';
import { IParsedDomain } from 'src/app/types/parsedDomain.interface';

export enum EWatchListActions {
  AddDomainToWatchList = '[Add to WatchList] Add Domain to WatchList',
  GetWatchList = '[WatchList] Get WatchList',
  SelectFromWatchList = '[Selected From WatchList] Get Selected Favorite From WatchList',
  RemoveFromWatchList = '[Remove from WatchList] Remove Domain from WatchList',
}

//WATCHLIST ACTIONS
export class AddDomainToWatchList implements Action {
  public readonly type = EWatchListActions.AddDomainToWatchList;
  constructor(public payload: IParsedDomain) {}
}

export class GetWatchList implements Action {
  public readonly type = EWatchListActions.GetWatchList;
}

export class SelectFromWatchList implements Action {
  public readonly type = EWatchListActions.SelectFromWatchList;
  constructor(public payload: IParsedDomain) {}
}

export class RemoveFromWatchList implements Action {
  public readonly type = EWatchListActions.RemoveFromWatchList;
  constructor(public payload: IParsedDomain) {}
}

export type WatchListActions =
  | AddDomainToWatchList
  | GetWatchList
  | SelectFromWatchList
  | RemoveFromWatchList;
