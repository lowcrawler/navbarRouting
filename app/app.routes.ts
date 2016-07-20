import { provideRouter, RouterConfig } from '@angular/router';

import { AppComponent } from './app.component';
import { Module1Component }  from './module1/module1.component';
import { Module2Component }  from './module2/module2.component';
import { Module3Component }  from './module3/module3.component';
import { module1Routes } from './module1/module1.routes';
import { module2Routes } from './module2/module2.routes';
import { module3Routes } from './module3/module3.routes';

const routes: RouterConfig = [
	...module1Routes,
	...module2Routes,
	...module3Routes,
  { path: '', component: AppComponent },
  { path: 'module1', component: Module1Component },
  { path: 'module2', component: Module2Component },
  { path: 'module3', component: Module3Component }
];

export const appRouterProviders = [
  provideRouter(routes)
];
