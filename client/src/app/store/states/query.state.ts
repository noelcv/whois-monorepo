import { IQuery } from 'src/app/types/domainQuery.interface';

export interface IQueryState {
  query: IQuery | null;
}

export const initialQueryState: IQueryState = {
  query: null,
};
