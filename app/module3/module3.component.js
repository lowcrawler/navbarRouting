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
var router_1 = require('@angular/router');
var Module3Component = (function () {
    function Module3Component() {
    }
    Module3Component = __decorate([
        core_1.Component({
            selector: 'mod3',
            directives: [router_1.ROUTER_DIRECTIVES, a_component_1.AComponent, b_component_1.BComponent],
            template: "<h3>Module3</h3>\n  \t\t\tMod3 Navigate:\n\t\t\t<nav>\n\t\t\t<a [routerLink]=\"['a']\">A</a>\n\t\t\t<a [routerLink]=\"['b']\">B</a>\n\t\t\t</nav>\n\t\t\t<br>------------Module 3 Router Outlet----------------<br>\n\t\t\t<router-outlet><router-outlet>"
        }), 
        __metadata('design:paramtypes', [])
    ], Module3Component);
    return Module3Component;
}());
exports.Module3Component = Module3Component;
//# sourceMappingURL=module3.component.js.map