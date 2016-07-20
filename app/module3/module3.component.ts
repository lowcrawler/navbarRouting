import { Component } from '@angular/core';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'mod3',
  directives: [ROUTER_DIRECTIVES, AComponent, BComponent],
  template: `<h3>Module3</h3>
  			Mod3 Navigate:
			<nav>
			<a [routerLink]="['a']">A</a>
			<a [routerLink]="['b']">B</a>
			</nav>
			<br>------------Module 3 Router Outlet----------------<br>
			<router-outlet><router-outlet>`
		})
export class Module3Component { }
