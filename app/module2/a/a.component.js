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
var asub1_component_1 = require('./sub1/asub1.component');
var asub2_component_1 = require('./sub2/asub2.component');
var AComponent = (function () {
    function AComponent() {
    }
    AComponent = __decorate([
        core_1.Component({
            selector: 'acomp',
            directives: [asub1_component_1.ASub1Component, asub2_component_1.ASub2Component],
            template: "<h2>Module2_A</h2>\n  \t\t\tMod 2A Navigate:\n\t\t\t<a_sub1></a_sub1>\n\t\t\t<a_sub2></a_sub2>"
        }), 
        __metadata('design:paramtypes', [])
    ], AComponent);
    return AComponent;
}());
exports.AComponent = AComponent;
//# sourceMappingURL=a.component.js.map