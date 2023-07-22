import { createSelector } from '@ngrx/store';
import { IAppState } from '../states/app.state';
import { IDomainState } from '../states/domain.state';

const selectDomain = (state: IAppState) => state.domain;

export const selectedDomain = createSelector(
  selectDomain,
  (state: IDomainState) => state.domainResult
);
