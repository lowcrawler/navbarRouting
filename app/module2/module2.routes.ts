import { RouterConfig }          from '@angular/router';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { Module2Component } from './module2.component';

export const module2Routes: RouterConfig =[
  {
    path: 'module2',
    component: Module2Component,
    children: [
     { path: 'a',  component: AComponent },
     { path: 'b', component: BComponent }
   ]
  }
];
