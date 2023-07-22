import { Action } from '@ngrx/store';

export enum EUiActions {
  DisplayResults = '[Display Results] Show Result State',
  DisplayFavorites = '[Display Favorites] Show Favorites State',
  DisplaySelectedFavorite = '[Display Selected Favorite] Show Selected Favorite State',
  DisplayFeedback = '[Display Feedback] Show Feedback State',
}

//UI ACTIONS
export class DisplayResults implements Action {
  public readonly type = EUiActions.DisplayResults;
  constructor(public payload: boolean) {}
}

export class DisplayFavorites implements Action {
  public readonly type = EUiActions.DisplayFavorites;
  constructor(public payload: boolean) {}
}

export class DisplaySelectedFavorite implements Action {
  public readonly type = EUiActions.DisplaySelectedFavorite;
  constructor(public payload: boolean) {}
}

export class DisplayFeedback implements Action {
  public readonly type = EUiActions.DisplayFeedback;
  constructor(public payload: boolean) {}
}

export type UiActions =
  | DisplayResults
  | DisplayFavorites
  | DisplaySelectedFavorite
  | DisplayFeedback;
