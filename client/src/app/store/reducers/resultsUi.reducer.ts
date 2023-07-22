import { EUiActions, UiActions } from '../actions/ui.actions';
import {
  IResultsUiState,
  initialResultsUiState,
} from '../states/resultsUi.state';

export const ResultsUiReducers = (
  state = initialResultsUiState,
  action: UiActions
): IResultsUiState => {
  switch (action.type) {
    case EUiActions.DisplayResults: {
      () => {
        setTimeout(() => {
          //intentionally empty
        }, 2500);
      };
      return {
        show: action.payload,
      };
    }
    default:
      return state;
  }
};
