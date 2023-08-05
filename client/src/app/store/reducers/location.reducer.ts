import { ELocationActions, LocationActions } from '../actions/location.actions';
import { ILocationState, initialLocationState } from '../states/location.state';

export const UserLocationReducers = (
  state = initialLocationState,
  action: LocationActions
): ILocationState => {
  switch (action.type) {
    case ELocationActions.SelectUserLocation: {
      return {
        ...state,
        location: {
          result: action.payload,
        },
      };
    }
    default:
      return state;
  }
};
