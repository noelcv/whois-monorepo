import { Action } from '@ngrx/store';
import { IQuery } from 'src/app/types/domainQuery.interface';
import { IDomainResult } from 'src/app/types/domainResult.interface';

export enum EDomainActions {
  GetDomainResult = '[Result Domain] Get Domain Result',
  GetDomainQuery = '[Query Domain] Get Domain Query',
  AddDomainToWatchList = '[Add to Watchlist] Add Domain to WatchList',
  GetWatchList = '[WatchList] Get WatchList',

  //TODO: add further actions ex. GetDomainResultSuccess, GetDomainResultError
}

export class GetDomainResult implements Action {
  public readonly type = EDomainActions.GetDomainResult;
  constructor(public payload: IDomainResult) {}
}

export class GetDomainQuery implements Action {
  public readonly type = EDomainActions.GetDomainQuery;
  constructor(public payload: IQuery) {}
}

export type DomainActions = GetDomainResult | GetDomainQuery;
