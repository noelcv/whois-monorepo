import {
  EWatchListActions,
  WatchListActions,
} from '../actions/watchlist.actions';
import {
  initialWatchListState,
  IWatchListState,
} from '../states/watchList.state';

//TODO: test action
export const watchListReducers = (
  state = initialWatchListState,
  action: WatchListActions
): IWatchListState => {
  switch (action.type) {
    case EWatchListActions.AddDomainToWatchList: {
      state = { myWatchList: [...state.myWatchList, action.payload] };

      return { ...state };
    }
    case EWatchListActions.GetWatchList: {
      return { ...state };
    }

    case EWatchListActions.SelectFromWatchList: {
      const selectedDomain = state.myWatchList.filter(
        domain => domain.uid === action.payload.uid
      )[0];

      return {
        ...state,
        selectedFavorite: selectedDomain,
      };
    }

    case EWatchListActions.RemoveFromWatchList: {
      const filteredDomainIndex = state.myWatchList.findIndex(
        domain => domain.uid === action.payload.uid
      );

      //we cannot change state directly, so we need to create a copy of it
      const clonedWatchList = [...state.myWatchList];

      if (filteredDomainIndex >= 0) {
        clonedWatchList.splice(filteredDomainIndex, 1);
      } else {
        console.log('Error: domain not found in WatchList');
      }
      return { ...state, myWatchList: clonedWatchList };
    }

    default:
      return state;
  }
};
