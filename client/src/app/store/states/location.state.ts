import { ILocationResult } from 'src/app/types/locationResult.interface';

export interface ILocationState {
  location: ILocationResult;
}

export const initialLocationState: ILocationState = {
  location: {
    result: undefined,
  },
};
