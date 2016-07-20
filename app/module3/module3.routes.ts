import { RouterConfig }          from '@angular/router';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { Module3Component } from './module3.component';

export const module3Routes: RouterConfig =[
  {
    path: 'module3',
    component: Module3Component,
    children: [
     { path: 'a',  component: AComponent },
     { path: 'b', component: BComponent }
   ]
  }
];
