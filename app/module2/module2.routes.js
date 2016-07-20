"use strict";
var a_component_1 = require('./a/a.component');
var b_component_1 = require('./b/b.component');
var module2_component_1 = require('./module2.component');
exports.module2Routes = [
    {
        path: 'module2',
        component: module2_component_1.Module2Component,
        children: [
            { path: 'a', component: a_component_1.AComponent },
            { path: 'b', component: b_component_1.BComponent }
        ]
    }
];
//# sourceMappingURL=module2.routes.js.map