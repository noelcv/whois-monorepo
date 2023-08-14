import { createSelector } from '@ngrx/store';
import { IAppState } from '../states/app.state';
import { ILocationState } from '../states/location.state';

const selectLocation = (state: IAppState) => state.location;

export const selectedLocation = createSelector(
  selectLocation,
  (state: ILocationState) => state
);
