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
import { Component, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { MediaEventsComponent } from '../media-events/media-events.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/**
 * A component to wrap HTML5's video component to allow for more complete usage.
 *
 * @author Eli Sadoff <snood1205@gmail.com>
 * @extends {MediaEventsComponent} for the purpose of getting event listeners
 * @implements {OnInit}
 */
var VideoAngularaComponent = (function (_super) {
    __extends(VideoAngularaComponent, _super);
    function VideoAngularaComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Whether or not the video plays upon ready (default: {@code false}).
         * @type {boolean}
         */
        _this.autoplay = false;
        /**
         * Whether or not the video has (default) controls (default: {@code false}).
         * @type {boolean}
         */
        _this.controls = false;
        /**
         * The type of cross origin requests allowed (default: {@code null}).
         * @type {'anonymous'|'use-credentials'|null}
         */
        _this.crossOrigin = null;
        /**
         * The height of the video (default: {@code 0}).
         * @type {number}
         */
        _this.height = 0;
        /**
         * Whether or not the video is to loop (go back to the start automatically) after it is
         * finished playing (default: {@code false})
         * @type {boolean}
         */
        _this.loop = false;
        /**
         * Whether or not the video is muted (default: {@code false}).
         * @type {boolean}
         */
        _this.muted = false;
        /**
         * The type of preload for the video (default: {@code 'auto'}
         * @type {'none'|'metadata'|'auto'|''}
         */
        _this.preload = 'auto';
        /**
         * The URL to the poster frame for the video (default: {@code ''})
         * @type {string}
         */
        _this.poster = '';
        /**
         * The source URL for the video (default: {@code ''})
         * @type {string}
         */
        _this.src = '';
        /**
         * The source object for the video (default: {@code null})
         * @type {object}
         */
        _this.srcObject = null;
        /**
         * Whether or not the video is streaming (default: {@code false}).
         * @type {boolean}
         */
        _this.streaming = false;
        /**
         * The width of the video in pixels (default: {@code 0}).
         * @type {number}
         */
        _this.width = 0;
        _this.ngModelChange = new EventEmitter();
        return _this;
    }
    VideoAngularaComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        Object.assign(this.video, this.constructVideoElementAttributes());
        this.mediaElement = this.video;
        this.eventListeners.canplay.options.runOnce = true;
    };
    VideoAngularaComponent.prototype.writeValue = function (value) {
        this.value = value;
        this.onChange(value);
    };
    Object.defineProperty(VideoAngularaComponent.prototype, "ngModel", {
        get: function () {
            return this.srcObject;
        },
        set: function (srcObject) {
            this.srcObject = srcObject;
            this.ngModelChange.emit(this.srcObject);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VideoAngularaComponent.prototype, "video", {
        get: function () {
            return this.videoEl == null ? null : this.videoEl.nativeElement;
        },
        set: function (video) {
            this.videoEl.nativeElement = video;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VideoAngularaComponent.prototype, "value", {
        get: function () {
            return this.videoObj;
        },
        set: function (value) {
            if (this.videoObj !== value) {
                this.videoObj = value;
                this.onChange(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    VideoAngularaComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    VideoAngularaComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
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
                    template: "\n    <video #videoEl [height]=\"height\" [width]=\"width\">{{alt}}</video>",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return VideoAngularaComponent; }),
                            multi: true
                        }
                    ]
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
        'ngModelChange': [{ type: Output },],
        'videoEl': [{ type: ViewChild, args: ['videoEl',] },],
        'ngModel': [{ type: Input },],
        'value': [{ type: Input },],
    };
    return VideoAngularaComponent;
}(MediaEventsComponent));
export { VideoAngularaComponent };
//# sourceMappingURL=video-angulara.component.js.map