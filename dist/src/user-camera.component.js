var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Component } from '@angular/core';
import { ParentCameraComponent } from './utilities/components/parent-camera.component';
/**
 * This class should be extended by the user to implement the class they use.
 * It should have a template similar to this:
 * {@code `
 * <camera-angulara-component [height]="height" [width]="width" [countdown]="countdown"
 *                            [imageFormat]="imageFormat" captureMessage="captureMessage">
 * </camera-angulara-component>
 * `}
 */
var UserCameraComponent = (function (_super) {
    __extends(UserCameraComponent, _super);
    function UserCameraComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserCameraComponent.decorators = [
        { type: Component, args: [{},] },
    ];
    /** @nocollapse */
    UserCameraComponent.ctorParameters = function () { return []; };
    return UserCameraComponent;
}(ParentCameraComponent));
export { UserCameraComponent };
//# sourceMappingURL=user-camera.component.js.map