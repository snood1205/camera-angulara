import { Component, Inject, Input } from '@angular/core';
var CameraAngularaComponent = (function () {
    function CameraAngularaComponent(navigator) {
        this.navigator = navigator;
        this.width = 320;
        this.height = 0;
        this.streaming = false;
    }
    CameraAngularaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.video = { height: this.height, width: this.width };
        this.canvas = { height: this.height, width: this.width };
        this.navigator.mediaDevices.getUserMedia(({ video: true, audio: false }))
            .then(function (stream) { return _this.stream = stream; });
    };
    CameraAngularaComponent.prototype.streamOnCanPlay = function () {
        if (!this.streaming) {
            this.streaming = true;
        }
    };
    CameraAngularaComponent.prototype.takePhoto = function () {
    };
    CameraAngularaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'camera-angulara-component',
                    template: "\n      <video-angulara-component *ngIf=\"stream\" [srcObject]=\"stream\" (onCanPlay)=\"streamOnCanPlay()\"\n                                [height]=\"video.height\" [width]=\"video.width\" [(ngModel)]=\"videoObj\"\n                                [alt]=\"'Video stream is not available.'\"></video-angulara-component>\n      <button (click)=\"takePhoto()\">Take Photo</button>\n      <canvas [width]=\"canvas.width\" [height]=\"canvas.height\"></canvas>\n      <div class=\"output\">\n          <img alt=\"User's screen capture\">\n      </div>"
                },] },
    ];
    /** @nocollapse */
    CameraAngularaComponent.ctorParameters = function () { return [
        { type: Navigator, decorators: [{ type: Inject, args: ['Navigator',] },] },
    ]; };
    CameraAngularaComponent.propDecorators = {
        'countdown': [{ type: Input },],
        'width': [{ type: Input },],
        'height': [{ type: Input },],
        'imageFormat': [{ type: Input },],
        'captureMessage': [{ type: Input },],
    };
    return CameraAngularaComponent;
}());
export { CameraAngularaComponent };
//# sourceMappingURL=camera-angulara.component.js.map