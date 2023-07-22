import { EDomainActions } from '../actions/domain.actions';
import { DomainActions } from '../actions/domain.actions';
import { IDomainState, initialDomainState } from '../states/domain.state';

export const domainReducers = (
  state = initialDomainState,
  action: DomainActions
): IDomainState => {
  switch (action.type) {
    case EDomainActions.GetDomainResult: {
      return {
        ...state,
        domainResult: action.payload,
      };
    }
    default:
      return state;
  }
};
