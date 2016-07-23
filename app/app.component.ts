import { Component, Input,  trigger,
  state,
  style,
  transition,
  animate } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute, Router } from '@angular/router';
import { Navigation } from './navigation.class';

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  template: `<h1>Multi level tree routing Proof of Concept</h1>
  			<div (click)="activeTabName=''">App Navigate:</div>
<div id="container">
           <nav class="nav" *ngIf=navmenu>
           <ul>
              <li *ngFor="let button of navButtons">
                <a [routerLink]="button.route" routerLinkActive="navDropDown" (click)="navSelected(button.route);">{{button.label}}</a>
              </li>
            </ul>

				<!--a @navState="myNavState1"
					(click)="navSelected('mod1');" [routerLink]="['/module1']">Module1</a>
      			<a @navState="myNavState2"
					(click)="navSelected('mod2');" [routerLink]="['/module2']">Module2</a>
	  			<a @navState="myNavState3"
					(click)="navSelected('mod3');" [routerLink]="['/module3']">Module3</a>
					<a [class.navDropDown]="activeTabName == 'mod1'" [class.hidden]="activeTabName != '' && activeTabName != 'mod1'"
						(click)="navSelected('mod1');" [routerLink]="['/module1']">Module1</a-->
      			<!--a [class.navDropDown]="activeTabName == 'mod2'" [class.hidden]="activeTabName != '' && activeTabName != 'mod2'"
					(click)="navSelected('mod2');" [routerLink]="['/module2']">Module2</a>
	  			<a [class.navDropDown]="activeTabName == 'mod3'" [class.hidden]="activeTabName != '' && activeTabName != 'mod3'"
					(click)="navSelected('mod3');" [routerLink]="['/module3']">Module3</a-->

    		</nav>




        <nav class="nav" *ngIf=!navmenu>
        <ul>
           <li *ngFor="let button of navButtons">
             <a *ngIf="router.url==button.route" [routerLink]="button.route" routerLinkActive="navDropDown" (click)="navSelected(button.route);">{{button.label}}</a>
             <ul>
             <li> <a [routerLink]="button.route" routerLinkActive="navDropDown" (click)="navSelected(button.route);">{{button.label}}</a></li>
             </ul>
           </li>
         </ul>
        
        <!--select (change)="navSelected($event.target.value)">
          <option [ngValue]="button" *ngFor="let button of navButtons;"  [value]="button.route">{{button.label}}</option>
        </select-->

     </nav>
</div>
			<!--br>----------------App component router outlet below --------------<br-->
			<router-outlet></router-outlet>`,
animations: [
    	trigger('navState', [
			state('expanded', style({
				backgroundColor: '#ff4444',
		        transform: 'scale(1)'
			})),
      		state('inactive', style({
		        //backgroundColor: '#44ff44',
				display: 'none',
				transform: 'scale(0)'
			})),
			state('active',   style({
				backgroundColor: '#1111ff',
				transform: 'scale(1.5)'
			})),
			transition('expanded => inactive', animate('1000ms ease-out')),
			transition('inactive => expanded', animate('1000ms ease-in')),
			transition('active => expanded', animate('1000ms ease-out')),
			transition('active => inactive', animate('1000ms ease-out'))
		])
	]
})

export class AppComponent  {
	activeTabName = '';
  router : Router;
  navmenu = false;
  navButtons : Navigation[];
	// myNavState1 = 'expanded';
	// myNavState2 = 'expanded';
	// myNavState3 = 'expanded';

  constructor(_activatedRoute: ActivatedRoute, _router: Router ) {
      this.router = _router;
      this.navButtons = [new Navigation('Module1','/module1'), new Navigation('Module2','/module2'), new Navigation('Module3','/module3')];

  }


onChange() {
  console.log("Changed");
}


	navSelected(navRoute) {
    console.log("navSelected("+navRoute+")");
    if(this.router.url==navRoute) {
      console.log("Already on this page... let's expand the dropdown");
    } else {
      console.log("new page (" + navRoute + ") was requested... let's go there");
      console.log("new page (" + navRoute + ") was requested... let's collapse this level");
      console.log("new page (" + navRoute + ") was requested... let's bring up next level");

    }


		// console.log(navName + " Clicked!");
		// if(navName==this.activeTabName) {
		// 	this.activeTabName = '';
		// 	// this.myNavState1='expanded';
		// 	// this.myNavState2='expanded';
		// 	// this.myNavState3='expanded';
		// } else {
    //
		// 	// this.myNavState1='inactive';
		// 	// this.myNavState2='inactive';
		// 	// this.myNavState3='inactive';
		// 	this.activeTabName = navName;
		// 	switch (navName) {
		// 	    case "mod1":
		// 		this.myNavState1 = 'active';
		// 	      break;
		// 	    case "mod2":
		// 		this.myNavState2 = 'active';
		// 	      break;
		// 	    case "mod3":
		// 		this.myNavState3 = 'active';
		// 	      break;
		// 	    default:
		// 	      alert("There has been an error!");
		// 	  }
		// }



	}

}
