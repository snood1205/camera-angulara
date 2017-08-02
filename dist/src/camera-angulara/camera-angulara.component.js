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
import { Component, Inject, EventEmitter, Output } from '@angular/core';
import { ParentCameraComponent } from '../utilities/components/parent-camera.component';
/**
 * The main component for camera angulara. It has 5 possible inputs and is what
 * the end user should use in their application as 'camera-angulara-component'.
 *
 * @author Eli Sadoff <snood1205@gmail.com>
 * @implements {OnInit}
 */
var CameraAngularaComponent = (function (_super) {
    __extends(CameraAngularaComponent, _super);
    function CameraAngularaComponent(navigator) {
        var _this = _super.call(this) || this;
        _this.navigator = navigator;
        /**
         * An indicator that fires when the picture is taken allowing for a parent component to be
         * able to listen for the image's being taken.
         * @type {EventEmitter<Object>}
         */
        _this.onPhotoCapture = new EventEmitter();
        _this.streaming = false;
        return _this;
    }
    CameraAngularaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.video = { height: this.height, width: this.width };
        this.canvas = { height: this.height, width: this.width };
        this.navigator.mediaDevices.getUserMedia(({ video: true, audio: false }))
            .then(function (stream) { return _this.stream = stream; });
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
        'onPhotoCapture': [{ type: Output },],
    };
    return CameraAngularaComponent;
}(ParentCameraComponent));
export { CameraAngularaComponent };
//# sourceMappingURL=camera-angulara.component.js.map