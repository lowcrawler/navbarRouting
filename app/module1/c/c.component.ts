import { Component } from '@angular/core';
import { CSub1Component } from './sub1/csub1.component';
import { CSub2Component } from './sub2/csub2.component';

@Component({
  selector: 'ccomp',
  directives: [CSub1Component, CSub2Component],
  template: `<h2>Module1_C</h2>
  			Navigate:
			<c_sub1></c_sub1>
			<c_sub2></c_sub2>`
		})
export class CComponent { }
