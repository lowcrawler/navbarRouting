import { Component } from '@angular/core';
import { ASub1Component } from './sub1/asub1.component';
import { ASub2Component } from './sub2/asub2.component';

@Component({
  selector: 'acomp',
  directives: [ASub1Component, ASub2Component],
  template: `<h2>Module1_A</h2>
  			Navigate:
			<a_sub1></a_sub1>
			<a_sub2></a_sub2>`
		})
export class AComponent { }
