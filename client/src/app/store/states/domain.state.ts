import { IDomainResult } from 'src/app/types/domainResult.interface';

export interface IDomainState {
  [x: string]: unknown;
  domainResult: IDomainResult;
}

export const initialDomainState: IDomainState = {
  domainResult: {
    result: undefined,
  },
};
