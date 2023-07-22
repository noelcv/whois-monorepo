import { IParsedDomain } from 'src/app/types/parsedDomain.interface';

export interface IWatchListState {
  myWatchList: IParsedDomain[];
  selectedFavorite?: IParsedDomain | null;
}

export const initialWatchListState: IWatchListState = {
  myWatchList: [],
  selectedFavorite: null,
};
