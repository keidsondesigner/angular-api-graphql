import { registerLocaleData } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import localePtBr from '@angular/common/locales/pt';
import { inject, LOCALE_ID } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { InMemoryCache } from '@apollo/client/core';
import { provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

// Registra os dados de localização para português do Brasil
registerLocaleData(localePtBr, 'pt-BR');

bootstrapApplication(AppComponent, {
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    provideRouter(routes),
    provideHttpClient(),
    provideApollo(() => {
      const httpLink = inject(HttpLink);

      return {
        link: httpLink.create({
          uri: 'https://rickandmortyapi.com/graphql', // Rick and Morty GraphQL API
        }),
        cache: new InMemoryCache()
      };
    }),
  ],
});