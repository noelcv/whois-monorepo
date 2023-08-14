import { Action } from '@ngrx/store';
import { IUserLocation } from 'src/app/services/geolocation/geolocation.interface';

export enum ELocationActions {
  SetUserLocation = '[Set UserLocation] Set UserLocation',
  GetUserLocation = '[Get UserLocation] Get User Location',
}

//LOCATION ACTIONS
export class SetUserLocation implements Action {
  public readonly type = ELocationActions.SetUserLocation;
  constructor(public payload: IUserLocation) {
    console.log('payload', payload);
  }
}

export class GetUserLocation implements Action {
  public readonly type = ELocationActions.GetUserLocation;
  constructor(public payload: IUserLocation) {}
}

export type LocationActions = SetUserLocation | GetUserLocation;
