import { Injectable } from '@angular/core';
import { ofType, Actions, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {
  GetDomainResult,
  EDomainActions,
  GetDomainQuery,
} from '../actions/domain.actions';
import { DomainService } from 'src/app/services/domain/domain.service';
import { IDomainResult } from 'src/app/types/domainResult.interface';

@Injectable()
export class QueryEffects {
  getQuery$ = createEffect(() =>
    this._actions$.pipe(
      ofType<GetDomainQuery>(EDomainActions.GetDomainQuery),
      switchMap(action => this._domainService.queryDomain(action.payload)),
      switchMap((res: IDomainResult) => {
        return of(new GetDomainResult(res));
      })
    )
  );

  constructor(
    private _domainService: DomainService,
    private _actions$: Actions
  ) {}
}
