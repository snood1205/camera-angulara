import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CameraAngularaComponent } from './camera-angulara/camera-angulara.component';
import { MediaModule } from './utilities/media-module/media.module';
import { UserCameraComponent } from './utilities/components/user-camera.component';
import { ParentCameraComponent } from './utilities/components/parent-camera.component';
var CameraAngularaModule = (function () {
    function CameraAngularaModule() {
    }
    CameraAngularaModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        BrowserModule,
                        MediaModule
                    ],
                    providers: [
                        { provide: 'Window', useValue: window },
                        { provide: 'Navigator', useValue: navigator }
                    ],
                    declarations: [CameraAngularaComponent, ParentCameraComponent, UserCameraComponent],
                    entryComponents: [UserCameraComponent],
                    exports: [UserCameraComponent]
                },] },
    ];
    /** @nocollapse */
    CameraAngularaModule.ctorParameters = function () { return []; };
    return CameraAngularaModule;
}());
export { CameraAngularaModule };
//# sourceMappingURL=camera-angulara.module.js.map