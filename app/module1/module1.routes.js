"use strict";
var a_component_1 = require('./a/a.component');
var b_component_1 = require('./b/b.component');
var c_component_1 = require('./c/c.component');
var module1_component_1 = require('./module1.component');
exports.module1Routes = [
    {
        path: 'module1',
        component: module1_component_1.Module1Component,
        children: [
            { path: 'a', component: a_component_1.AComponent },
            { path: 'b', component: b_component_1.BComponent },
            { path: 'c', component: c_component_1.CComponent }
        ]
    }
];
//# sourceMappingURL=module1.routes.js.map