import { RouterReducerState } from '@ngrx/router-store';
import { IQueryState, initialQueryState } from './query.state';
import { IDomainState, initialDomainState } from './domain.state';
import { IResultsUiState, initialResultsUiState } from './resultsUi.state';
import { initialWatchListState, IWatchListState } from './watchList.state';
import {
  IFavoritesUiState,
  initialFavoritesUiState,
} from './favoritesUi.state';
import {
  initialValidationFeedbackUiState,
  IValidationFeedbackUiState,
} from './validationUi.state';

export interface IAppState {
  router?: RouterReducerState;
  query: IQueryState;
  domain: IDomainState;
  display: IResultsUiState;
  displayFavorites: IFavoritesUiState;
  watchList: IWatchListState;
  feedback: IValidationFeedbackUiState;
}
/*this is the equivalent to the store in RTK -
 *we register the different state for the different slices,
 *i.e., (reducers + actions)
 */

export const initialAppState: IAppState = {
  domain: initialDomainState,
  query: initialQueryState,
  display: initialResultsUiState,
  displayFavorites: initialFavoritesUiState,
  watchList: initialWatchListState,
  feedback: initialValidationFeedbackUiState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}
