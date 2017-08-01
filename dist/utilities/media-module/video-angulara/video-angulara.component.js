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
import { Component, Input, ViewChild } from '@angular/core';
import { MediaEventsComponent } from '../media-events/media-events.component';
var VideoAngularaComponent = (function (_super) {
    __extends(VideoAngularaComponent, _super);
    function VideoAngularaComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.autoplay = false;
        _this.controls = false;
        _this.crossOrigin = null;
        _this.height = 0;
        _this.loop = false;
        _this.muted = false;
        _this.preload = 'auto';
        _this.poster = '';
        _this.src = '';
        _this.srcObject = null;
        _this.width = 0;
        return _this;
    }
    VideoAngularaComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        Object.assign(this.video, this.constructVideoElementAttributes());
        this.mediaElement = this.video;
        this.eventListeners.canplay.options.arguments = [{ height: this.video.videoHeight, width: this.video.videoWidth }];
        this.eventListeners.canplay.options.runOnce = true;
    };
    Object.defineProperty(VideoAngularaComponent.prototype, "video", {
        get: function () {
            if (this.videoEl == null) {
                return null;
            }
            return this.videoEl.nativeElement;
        },
        set: function (video) {
            this.videoEl.nativeElement = video;
        },
        enumerable: true,
        configurable: true
    });
    VideoAngularaComponent.prototype.constructVideoElementAttributes = function () {
        return {
            autoplay: this.autoplay,
            controls: this.controls,
            crossOrigin: this.crossOrigin,
            height: this.height,
            loop: this.loop,
            muted: this.muted,
            preload: this.preload,
            poster: this.poster,
            src: this.src,
            srcObject: this.srcObject,
            width: this.width
        };
    };
    VideoAngularaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'video-angulara-component',
                    template: "\n      <video #videoEl [height]=\"height\" [width]=\"width\">{{alt}}</video>"
                },] },
    ];
    /** @nocollapse */
    VideoAngularaComponent.ctorParameters = function () { return []; };
    VideoAngularaComponent.propDecorators = {
        'alt': [{ type: Input },],
        'autoplay': [{ type: Input },],
        'controls': [{ type: Input },],
        'crossOrigin': [{ type: Input },],
        'height': [{ type: Input },],
        'loop': [{ type: Input },],
        'muted': [{ type: Input },],
        'preload': [{ type: Input },],
        'poster': [{ type: Input },],
        'src': [{ type: Input },],
        'srcObject': [{ type: Input },],
        'streaming': [{ type: Input },],
        'width': [{ type: Input },],
        'videoEl': [{ type: ViewChild, args: ['videoEl',] },],
    };
    return VideoAngularaComponent;
}(MediaEventsComponent));
export { VideoAngularaComponent };
//# sourceMappingURL=video-angulara.component.js.map