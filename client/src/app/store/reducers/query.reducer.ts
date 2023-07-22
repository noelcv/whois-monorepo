import { EDomainActions } from '../actions/domain.actions';
import { DomainActions } from '../actions/domain.actions';
import { initialQueryState, IQueryState } from '../states/query.state';

export const queryReducers = (
  state = initialQueryState,
  action: DomainActions
): IQueryState => {
  switch (action.type) {
    case EDomainActions.GetDomainQuery: {
      return {
        ...state,
        query: {
          sld: action.payload.sld,
          tld: action.payload.tld,
        },
      };
    }
    default:
      return state;
  }
};
