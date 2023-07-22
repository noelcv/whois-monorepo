import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { appReducers } from './store/reducers/app.reducer';
import { DomainEffects } from './store/effects/domain.effects';
import { QueryEffects } from './store/effects/query.effects';

@NgModule({
  imports: [
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([QueryEffects, DomainEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
})
export class StateManagementModule {}
