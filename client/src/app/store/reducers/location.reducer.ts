import { IUserLocation } from 'src/app/services/geolocation/geolocation.interface';
import { ELocationActions, LocationActions } from '../actions/location.actions';
import { ILocationState, initialLocationState } from '../states/location.state';

export const UserLocationReducers = (
  state = initialLocationState,
  action: LocationActions
): IUserLocation => {
  switch (action.type) {
    case ELocationActions.GetUserLocation: {
      return {
        ...state,
        country: action.payload.country,
        town: action.payload.town,
      };
    }
    case ELocationActions.SetUserLocation: {
      return {
        ...state,
        country: action.payload.country,
        town: action.payload.town,
      };
    }
    default:
      return state;
  }
};
