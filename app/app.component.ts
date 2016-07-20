import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  template: `<h1>Multi level tree routing Proof of Concept</h1>
  			<div (click)="activeTabName=''">App Navigate:</div>
			<nav>
				<a [class.navDropDown]="activeTabName == 'mod1'" [class.hidden]="activeTabName != '' && activeTabName != 'mod1'" (click)="navSelected('mod1');" [routerLink]="['/module1']">Module1</a>
      			<a [class.navDropDown]="activeTabName == 'mod2'" [class.hidden]="activeTabName != '' && activeTabName != 'mod2'" (click)="activeTabName = 'mod2'" [routerLink]="['/module2']">Module2</a>
	  			<a [class.navDropDown]="activeTabName == 'mod3'" [class.hidden]="activeTabName != '' && activeTabName != 'mod3'" (click)="activeTabName = 'mod3'" [routerLink]="['/module3']">Module3</a>
    		</nav>
			<!--br>----------------App component router outlet below --------------<br-->
			<router-outlet></router-outlet>`
		})
export class AppComponent  {
	activeTabName = '';
	navSelected(navName) {
	//	if(navName==activeTabName) {

	//	} else {
			this.activeTabName = navName;
	//	}
	}
}
