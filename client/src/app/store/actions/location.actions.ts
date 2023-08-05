import { Action } from '@ngrx/store';
import { IParsedLocation } from 'src/app/types/parsedLocation.interface';

export enum ELocationActions {
  SetUserLocation = '[Set UserLocation] Set UserLocation',
  SelectUserLocation = '[Selected UserLocation] Select User Location',
}

//LOCATION ACTIONS
export class SetUserLocation implements Action {
  public readonly type = ELocationActions.SetUserLocation;
  constructor(public payload: IParsedLocation) {}
}

export class SelectUserLocation implements Action {
  public readonly type = ELocationActions.SelectUserLocation;
  constructor(public payload: IParsedLocation) {}
}

export type LocationActions = SetUserLocation | SelectUserLocation;
