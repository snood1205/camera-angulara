import { NgModule } from '@angular/core';
var CameraAngularaModule = (function () {
    function CameraAngularaModule() {
    }
    CameraAngularaModule.decorators = [
        { type: NgModule, args: [{
                    providers: [
                        { provide: 'Window', useValue: window },
                        { provide: 'Navigator', useValue: navigator }
                    ]
                },] },
    ];
    /** @nocollapse */
    CameraAngularaModule.ctorParameters = function () { return []; };
    return CameraAngularaModule;
}());
export { CameraAngularaModule };
//# sourceMappingURL=camera-angulara.module.js.map