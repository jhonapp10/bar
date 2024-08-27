
import { ApplicationConfig, NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes ,routing} from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { animation } from '@angular/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(undefined), provideAnimationsAsync(), provideHttpClient()]
};
