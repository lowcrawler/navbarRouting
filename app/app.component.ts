import { Component, Input,  trigger,
  state,
  style,
  transition,
  animate } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  template: `<h1>Multi level tree routing Proof of Concept</h1>
  			<div (click)="activeTabName=''">App Navigate:</div>
			<nav>
				<a @navState="myNavState1"
					(click)="navSelected('mod1');" [routerLink]="['/module1']">Module1</a>

      			<a @navState="myNavState2"
					(click)="navSelected('mod2');" [routerLink]="['/module2']">Module2</a>
	  			<a @navState="myNavState3"
					(click)="navSelected('mod3');" [routerLink]="['/module3']">Module3</a>
					<!--a [class.navDropDown]="activeTabName == 'mod1'" [class.hidden]="activeTabName != '' && activeTabName != 'mod1'"
						(click)="navSelected('mod1');" [routerLink]="['/module1']">Module1</a-->
      			<!--a [class.navDropDown]="activeTabName == 'mod2'" [class.hidden]="activeTabName != '' && activeTabName != 'mod2'"
					(click)="navSelected('mod2');" [routerLink]="['/module2']">Module2</a>
	  			<a [class.navDropDown]="activeTabName == 'mod3'" [class.hidden]="activeTabName != '' && activeTabName != 'mod3'"
					(click)="navSelected('mod3');" [routerLink]="['/module3']">Module3</a>
    		</nav>
			<!--br>----------------App component router outlet below --------------<br-->
			<router-outlet></router-outlet>`,
animations: [
    	trigger('navState', [
      		state('inactive', style({
		        backgroundColor: '#eee',
		        transform: 'scale(1)'
			})),
			state('active',   style({
				backgroundColor: '#1111ff',
				transform: 'scale(1.5)'
			})),
			transition('inactive => active', animate('100ms ease-in')),
			transition('active => inactive', animate('100ms ease-out'))
		])
	]
})

export class AppComponent  {
	activeTabName = '';
	myNavState1 = 'inactive';
	myNavState2 = 'active';
	myNavState3 = 'inactive';

	navSelected(navName) {
		console.log(navName + " Clicked!");
		if(navName==this.activeTabName) {
			this.activeTabName = '';
		} else {
			this.activeTabName = navName;
		}
		this.myNavState1='inactive';
		this.myNavState2='inactive';
		this.myNavState3='inactive';

		switch (navName) {
		    case "mod1":
			this.myNavState1 = 'active';
		      break;
		    case "mod2":
			this.myNavState2 = 'active';
		      break;
		    case "mod3":
			this.myNavState3 = 'active';
		      break;
		    default:
		      alert("There has been an error!");
		  }
	}

}
