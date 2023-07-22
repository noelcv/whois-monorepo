import { createSelector } from '@ngrx/store';
import { IAppState } from '../states/app.state';
import { IFavoritesUiState } from '../states/favoritesUi.state';
import { IResultsUiState } from '../states/resultsUi.state';
import { IValidationFeedbackUiState } from '../states/validationUi.state';

const checkUiResult = (state: IAppState) => state.display;
const checkUiWatchList = (state: IAppState) => state.displayFavorites;
const checkUiFeedback = (state: IAppState) => state.feedback;

export const selectedUiResult = createSelector(
  checkUiResult,
  (state: IResultsUiState) => state.show
);

export const selectedUiFavorite = createSelector(
  checkUiWatchList,
  (state: IFavoritesUiState) => state.showFavorite
);

export const displayFeedback = createSelector(
  checkUiFeedback,
  (state: IValidationFeedbackUiState) => state.display
);
