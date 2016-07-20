"use strict";
var a_component_1 = require('./a/a.component');
var b_component_1 = require('./b/b.component');
var module3_component_1 = require('./module3.component');
exports.module3Routes = [
    {
        path: 'module3',
        component: module3_component_1.Module3Component,
        children: [
            { path: 'a', component: a_component_1.AComponent },
            { path: 'b', component: b_component_1.BComponent }
        ]
    }
];
//# sourceMappingURL=module3.routes.js.map