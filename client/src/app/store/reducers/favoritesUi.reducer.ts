import { EUiActions, UiActions } from '../actions/ui.actions';
import {
  IFavoritesUiState,
  initialFavoritesUiState,
} from '../states/favoritesUi.state';

export const FavoritesUiReducers = (
  state = initialFavoritesUiState,
  action: UiActions
): IFavoritesUiState => {
  switch (action.type) {
    case EUiActions.DisplayFavorites: {
      () => {
        setTimeout(() => {
          //intentionally empty
        }, 2500);
      };
      return {
        showFavorite: action.payload,
      };
    }
    default:
      return state;
  }
};
