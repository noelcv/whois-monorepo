import { createSelector } from '@ngrx/store';
import { IAppState } from '../states/app.state';
import { IWatchListState } from '../states/watchList.state';

const checkWatchList = (state: IAppState) => state.watchList;

export const selectedWatchList = createSelector(
  checkWatchList,
  (state: IWatchListState) => state.selectedFavorite
);
