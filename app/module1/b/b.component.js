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
var bsub1_component_1 = require('./sub1/bsub1.component');
var bsub2_component_1 = require('./sub2/bsub2.component');
var bsub3_component_1 = require('./sub3/bsub3.component');
var BComponent = (function () {
    function BComponent() {
    }
    BComponent = __decorate([
        core_1.Component({
            selector: 'bcomp',
            directives: [bsub1_component_1.BSub1Component, bsub2_component_1.BSub2Component, bsub3_component_1.BSub3Component],
            template: "<h2>Module1_B</h2>\n  \t\t\tNavigate:\n\t\t\t<b_sub1></b_sub1>\n\t\t\t<b_sub2></b_sub2>\n\t\t\t<b_sub3></b_sub3>"
        }), 
        __metadata('design:paramtypes', [])
    ], BComponent);
    return BComponent;
}());
exports.BComponent = BComponent;
//# sourceMappingURL=b.component.js.map