import { Component } from '@angular/core';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'mod1',
  directives: [ROUTER_DIRECTIVES,
	  AComponent, BComponent, CComponent],
  template: `<h2>Module1</h2>
  			Mod1 Navigate:<nav>
      <a [routerLink]="['a']">A</a>
      <a [routerLink]="['b']">B</a>
      <a [routerLink]="['c']">C</a>
    </nav>
			<br>--------module1 router outlet-------------<br>
			<router-outlet></router-outlet>`
		})
export class Module1Component { }
