import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { IAppState } from '../states/app.state';
import { DomainService } from 'src/app/services/domain/domain.service';

@Injectable()
export class DomainEffects {
  //TODO: replace logic here to grab after QueryEffects

  constructor(
    private _domainService: DomainService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
