import { RouterConfig }          from '@angular/router';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { Module1Component } from './module1.component';

export const module1Routes: RouterConfig =[
  {
    path: 'module1',
    component: Module1Component,
    children: [
     { path: 'a',  component: AComponent },
     { path: 'b', component: BComponent },
     { path: 'c', component: CComponent }
   ]
  }
];
