import { Component } from '@angular/core';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'mod2',
  directives: [ROUTER_DIRECTIVES, AComponent, BComponent],
  template: `<h2>Module2</h2>
  			Mod2 Navigate:
			<nav>
			<a [routerLink]="['a']">A</a>
			<a [routerLink]="['b']">B</a>
			</nav>
			<br>------------Module 2 Router Outlet----------------<br>
			<router-outlet><router-outlet>`
		})
export class Module2Component { }
