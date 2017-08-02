import { Component, Input } from '@angular/core';
/**
 * This class should be extended by the user to implement the class they use.
 * It should have a template similar to this:
 * {@code `
 * <camera-angulara-component [height]="height" [width]="width" [countdown]="countdown"
 *                            [imageFormat]="imageFormat" captureMessage="captureMessage">
 * </camera-angulara-component>
 * `}
 */
var UserCameraComponent = (function () {
    function UserCameraComponent() {
        /**
         * The width of the image in pixels.
         * @type {number}
         */
        this.width = 320;
        /**
         * The height of the image in pixels.
         * @type {number}
         */
        this.height = 0;
    }
    UserCameraComponent.decorators = [
        { type: Component, args: [{ template: '' },] },
    ];
    /** @nocollapse */
    UserCameraComponent.ctorParameters = function () { return []; };
    UserCameraComponent.propDecorators = {
        'countdown': [{ type: Input },],
        'width': [{ type: Input },],
        'height': [{ type: Input },],
        'imageFormat': [{ type: Input },],
        'captureMessage': [{ type: Input },],
    };
    return UserCameraComponent;
}());
export { UserCameraComponent };
//# sourceMappingURL=user-camera.component.js.map