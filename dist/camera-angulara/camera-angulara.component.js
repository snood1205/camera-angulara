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
        this.navigator.mediaDevices.getUserMedia(({ video: true, audio: false }))
            .then(function (stream) { return _this.stream = stream; });
    };
    CameraAngularaComponent.prototype.resizeOnCanPlay = function (video) {
        console.log(video);
        if (!this.streaming) {
            this.height = video.videoHeight / (video.videoWidth / this.width);
            this.streaming = true;
        }
    };
    CameraAngularaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'camera-angulara-component',
                    template: "\n      <video-angulara-component *ngIf=\"stream\" [srcObject]=\"stream\" (onCanPlay)=\"resizeOnCanPlay(dimensions)\"\n                                [height]=\"video.height\" [width]=\"video.width\"\n                                [alt]=\"'Video stream is not available.'\"></video-angulara-component>\n      <button (click)=\"takePhoto()\">Take Photo</button>\n      <canvas [width]=\"canvas.width\" [height]=\"canvas.height\"></canvas>\n      <div class=\"output\">\n          <img alt=\"User's screen capture\">\n      </div>"
                },] },
    ];
    /** @nocollapse */
    CameraAngularaComponent.ctorParameters = function () { return [
        { type: Navigator, decorators: [{ type: Inject, args: ['Navigator',] },] },
    ]; };
    CameraAngularaComponent.propDecorators = {
        'countdown': [{ type: Input },],
        'canvas': [{ type: Input },],
        'video': [{ type: Input },],
        'width': [{ type: Input },],
        'imageFormat': [{ type: Input },],
        'captureMessage': [{ type: Input },],
    };
    return CameraAngularaComponent;
}());
export { CameraAngularaComponent };
//# sourceMappingURL=camera-angulara.component.js.map