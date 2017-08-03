import { Component, Inject, EventEmitter, Input, Output } from '@angular/core';
/**
 * The main component for camera angulara. It has 5 possible inputs and is what
 * the end user should use in their application as 'camera-angulara-component'.
 *
 * @author Eli Sadoff <snood1205@gmail.com>
 * @implements {OnInit}
 */
var CameraAngularaComponent = (function () {
    function CameraAngularaComponent(navigator) {
        this.navigator = navigator;
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
        /**
         * An indicator that fires when the picture is taken allowing for a parent component to be
         * able to listen for the image's being taken.
         * @type {EventEmitter<Object>}
         */
        this.onPhotoCapture = new EventEmitter();
        this.streaming = false;
    }
    CameraAngularaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.video = { height: this.height, width: this.width };
        this.canvas = { height: this.height, width: this.width };
        this.navigator.mediaDevices.getUserMedia(({ video: true, audio: false }))
            .then(function (stream) { _this.stream = stream; });
    };
    /**
     * This is passed as an event listener to the {@code canplay} event on video.
     * This sets the video to be streaming when it can play.
     */
    CameraAngularaComponent.prototype.streamOnCanPlay = function () {
        if (!this.streaming) {
            this.streaming = true;
        }
    };
    /**
     * The method called upon the button click to take a picture.
     */
    CameraAngularaComponent.prototype.takePhoto = function () {
        this.onPhotoCapture.emit({ video: this.videoObj, image: this.image });
    };
    CameraAngularaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'camera-angulara-component',
                    template: "\n    <video-angulara-component *ngIf=\"stream\" [srcObject]=\"stream\" (onCanPlay)=\"streamOnCanPlay()\"\n                              [height]=\"video.height\" [width]=\"video.width\" [(ngModel)]=\"videoObj\"\n                              [alt]=\"'Video stream is not available.'\"></video-angulara-component>\n    <button (click)=\"takePhoto()\">Take Photo</button>\n    <canvas [width]=\"canvas.width\" [height]=\"canvas.height\"></canvas>\n    <div class=\"output\">\n      <img alt=\"User's screen capture\">\n    </div>"
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
        'onPhotoCapture': [{ type: Output },],
    };
    return CameraAngularaComponent;
}());
export { CameraAngularaComponent };
//# sourceMappingURL=camera-angulara.component.js.map