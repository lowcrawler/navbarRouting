"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var a_component_1 = require('./a/a.component');
var b_component_1 = require('./b/b.component');
var c_component_1 = require('./c/c.component');
var router_1 = require('@angular/router');
var Module1Component = (function () {
    function Module1Component() {
    }
    Module1Component = __decorate([
        core_1.Component({
            selector: 'mod1',
            directives: [router_1.ROUTER_DIRECTIVES,
                a_component_1.AComponent, b_component_1.BComponent, c_component_1.CComponent],
            template: "<h2>Module1</h2>\n  \t\t\tMod1 Navigate:<nav>\n      <a [routerLink]=\"['a']\" routerLinkActive=\"navDropDown\">A</a>\n      <a [routerLink]=\"['b']\" routerLinkActive=\"navDropDown\">B</a>\n      <a [routerLink]=\"['c']\" routerLinkActive=\"navDropDown\">C</a>\n    </nav>\n\t\t\t<br>--------module1 router outlet-------------<br>\n\t\t\t<router-outlet></router-outlet>"
        }), 
        __metadata('design:paramtypes', [])
    ], Module1Component);
    return Module1Component;
}());
exports.Module1Component = Module1Component;
//# sourceMappingURL=module1.component.js.map