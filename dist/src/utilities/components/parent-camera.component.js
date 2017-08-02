import { Component, Input } from '@angular/core';
var ParentCameraComponent = (function () {
    function ParentCameraComponent() {
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
    ParentCameraComponent.decorators = [
        { type: Component, args: [{ template: '' },] },
    ];
    /** @nocollapse */
    ParentCameraComponent.ctorParameters = function () { return []; };
    ParentCameraComponent.propDecorators = {
        'countdown': [{ type: Input },],
        'width': [{ type: Input },],
        'height': [{ type: Input },],
        'imageFormat': [{ type: Input },],
        'captureMessage': [{ type: Input },],
    };
    return ParentCameraComponent;
}());
export { ParentCameraComponent };
//# sourceMappingURL=parent-camera.component.js.map