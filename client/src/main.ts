import { HttpClientModule } from '@angular/common/http';
import {
  enableProdMode,
  importProvidersFrom,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { StateManagementModule } from './app/stateManagement.module';
import { DomainService } from './app/services/domain/domain.service';
import { environment } from './environments/environment';
import { AppRoutingModule } from './app/app-routing.module';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    importProvidersFrom(
      HttpClientModule,
      DomainService,
      StateManagementModule,
      AppRoutingModule
    ),
  ],
}).catch(err => console.error(err));
