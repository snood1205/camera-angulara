import { Component, Input, Output, EventEmitter, Renderer2 } from '@angular/core';
var MediaEventsComponent = (function () {
    function MediaEventsComponent(renderer) {
        this.renderer = renderer;
        this.onAbort = new EventEmitter();
        this.onCanPlay = new EventEmitter();
        this.onCanPlayThrough = new EventEmitter();
        this.onDurationChange = new EventEmitter();
        this.onEmptied = new EventEmitter();
        this.onEncrypted = new EventEmitter();
        this.onEnded = new EventEmitter();
        this.onError = new EventEmitter();
        this.onInterruptBegin = new EventEmitter();
        this.onInterruptEnd = new EventEmitter();
        this.onLoadedData = new EventEmitter();
        this.onLoadedMetadata = new EventEmitter();
        this.onLoadStart = new EventEmitter();
        this.onPause = new EventEmitter();
        this.onPlay = new EventEmitter();
        this.onPlaying = new EventEmitter();
        this.onProgress = new EventEmitter();
        this.onRateChange = new EventEmitter();
        this.onSeeked = new EventEmitter();
        this.onSeeking = new EventEmitter();
        this.onStalled = new EventEmitter();
        this.onSuspend = new EventEmitter();
        this.onTimeUpdate = new EventEmitter();
        this.onVolumeChange = new EventEmitter();
        this.onWaiting = new EventEmitter();
        this.onAbortOptions = { preventDefault: false, skip: true };
        this.onCanPlayOptions = { preventDefault: false, skip: true };
        this.onCanPlayThroughOptions = { preventDefault: false, skip: true };
        this.onDurationChangeOptions = { preventDefault: false, skip: true };
        this.onEmptiedOptions = { preventDefault: false, skip: true };
        this.onEncryptedOptions = { preventDefault: false, skip: true };
        this.onEndedOptions = { preventDefault: false, skip: true };
        this.onErrorOptions = { preventDefault: false, skip: true };
        this.onInterruptBeginOptions = { preventDefault: false, skip: true };
        this.onInterruptEndOptions = { preventDefault: false, skip: true };
        this.onLoadedDataOptions = { preventDefault: false, skip: true };
        this.onLoadedMetadataOptions = { preventDefault: false, skip: true };
        this.onLoadStartOptions = { preventDefault: false, skip: true };
        this.onPauseOptions = { preventDefault: false, skip: true };
        this.onPlayOptions = { preventDefault: false, skip: true };
        this.onPlayingOptions = { preventDefault: false, skip: true };
        this.onProgressOptions = { preventDefault: false, skip: true };
        this.onRateChangeOptions = { preventDefault: false, skip: true };
        this.onSeekedOptions = { preventDefault: false, skip: true };
        this.onSeekingOptions = { preventDefault: false, skip: true };
        this.onStalledOptions = { preventDefault: false, skip: true };
        this.onSuspendOptions = { preventDefault: false, skip: true };
        this.onTimeUpdateOptions = { preventDefault: false, skip: true };
        this.onVolumeChangeOptions = { preventDefault: false, skip: true };
        this.onWaitingOptions = { preventDefault: false, skip: true };
    }
    MediaEventsComponent.prototype.ngOnInit = function () {
        this.eventListeners = {
            abort: { eventEmitter: this.onAbort, options: this.onAbortOptions },
            canplay: { eventEmitter: this.onCanPlay, options: this.onCanPlayOptions },
            canplaythrough: { eventEmitter: this.onCanPlayThrough, options: this.onCanPlayThroughOptions },
            durationchange: { eventEmitter: this.onDurationChange, options: this.onDurationChangeOptions },
            emptied: { eventEmitter: this.onEmptied, options: this.onEmptiedOptions },
            encrypted: { eventEmitter: this.onEncrypted, options: this.onEncryptedOptions },
            ended: { eventEmitter: this.onEnded, options: this.onEndedOptions },
            error: { eventEmitter: this.onError, options: this.onErrorOptions },
            interruptcegin: { eventEmitter: this.onInterruptBegin, options: this.onInterruptBeginOptions },
            interruptcnd: { eventEmitter: this.onInterruptEnd, options: this.onInterruptEndOptions },
            loadeddata: { eventEmitter: this.onLoadedData, options: this.onLoadedDataOptions },
            loadedmetadata: { eventEmitter: this.onLoadedMetadata, options: this.onLoadedMetadataOptions },
            loadstart: { eventEmitter: this.onLoadStart, options: this.onLoadStartOptions },
            pause: { eventEmitter: this.onPause, options: this.onPauseOptions },
            play: { eventEmitter: this.onPlay, options: this.onPlayOptions },
            playing: { eventEmitter: this.onPlaying, options: this.onPlayingOptions },
            progress: { eventEmitter: this.onProgress, options: this.onProgressOptions },
            ratechange: { eventEmitter: this.onRateChange, options: this.onRateChangeOptions },
            seeked: { eventEmitter: this.onSeeked, options: this.onSeekedOptions },
            seeking: { eventEmitter: this.onSeeking, options: this.onSeekingOptions },
            stalled: { eventEmitter: this.onStalled, options: this.onStalledOptions },
            suspend: { eventEmitter: this.onSuspend, options: this.onSuspendOptions },
            timeupdate: { eventEmitter: this.onTimeUpdate, options: this.onTimeUpdateOptions },
            volumechange: { eventEmitter: this.onVolumeChange, options: this.onVolumeChangeOptions },
            waiting: { eventEmitter: this.onWaiting, options: this.onWaitingOptions }
        };
    };
    MediaEventsComponent.prototype.ngDoCheck = function () {
        this.applyEventListeners();
    };
    MediaEventsComponent.prototype.play = function () {
        this.mediaElement.play();
    };
    MediaEventsComponent.prototype.applyEventListeners = function () {
        var _this = this;
        Object.keys(this.eventListeners).forEach(function (key) {
            var value = _this.eventListeners[key];
            if (_this.eventListeners.hasOwnProperty(key)) {
                if (value.options.skip)
                    return;
                _this.eventListeners[key].listener = _this.renderer.listen(_this.mediaElement, key, function (event) {
                    if (value.options.preventDefault) {
                        event.preventDefault();
                    }
                    value.eventEmitter.emit.apply(_this, value.options.arguments);
                    if (value.options.runOnce)
                        return false;
                });
            }
        });
    };
    MediaEventsComponent.decorators = [
        { type: Component, args: [{},] },
    ];
    /** @nocollapse */
    MediaEventsComponent.ctorParameters = function () { return [
        { type: Renderer2, },
    ]; };
    MediaEventsComponent.propDecorators = {
        'onAbort': [{ type: Output },],
        'onCanPlay': [{ type: Output },],
        'onCanPlayThrough': [{ type: Output },],
        'onDurationChange': [{ type: Output },],
        'onEmptied': [{ type: Output },],
        'onEncrypted': [{ type: Output },],
        'onEnded': [{ type: Output },],
        'onError': [{ type: Output },],
        'onInterruptBegin': [{ type: Output },],
        'onInterruptEnd': [{ type: Output },],
        'onLoadedData': [{ type: Output },],
        'onLoadedMetadata': [{ type: Output },],
        'onLoadStart': [{ type: Output },],
        'onPause': [{ type: Output },],
        'onPlay': [{ type: Output },],
        'onPlaying': [{ type: Output },],
        'onProgress': [{ type: Output },],
        'onRateChange': [{ type: Output },],
        'onSeeked': [{ type: Output },],
        'onSeeking': [{ type: Output },],
        'onStalled': [{ type: Output },],
        'onSuspend': [{ type: Output },],
        'onTimeUpdate': [{ type: Output },],
        'onVolumeChange': [{ type: Output },],
        'onWaiting': [{ type: Output },],
        'onAbortOptions': [{ type: Input },],
        'onCanPlayOptions': [{ type: Input },],
        'onCanPlayThroughOptions': [{ type: Input },],
        'onDurationChangeOptions': [{ type: Input },],
        'onEmptiedOptions': [{ type: Input },],
        'onEncryptedOptions': [{ type: Input },],
        'onEndedOptions': [{ type: Input },],
        'onErrorOptions': [{ type: Input },],
        'onInterruptBeginOptions': [{ type: Input },],
        'onInterruptEndOptions': [{ type: Input },],
        'onLoadedDataOptions': [{ type: Input },],
        'onLoadedMetadataOptions': [{ type: Input },],
        'onLoadStartOptions': [{ type: Input },],
        'onPauseOptions': [{ type: Input },],
        'onPlayOptions': [{ type: Input },],
        'onPlayingOptions': [{ type: Input },],
        'onProgressOptions': [{ type: Input },],
        'onRateChangeOptions': [{ type: Input },],
        'onSeekedOptions': [{ type: Input },],
        'onSeekingOptions': [{ type: Input },],
        'onStalledOptions': [{ type: Input },],
        'onSuspendOptions': [{ type: Input },],
        'onTimeUpdateOptions': [{ type: Input },],
        'onVolumeChangeOptions': [{ type: Input },],
        'onWaitingOptions': [{ type: Input },],
    };
    return MediaEventsComponent;
}());
export { MediaEventsComponent };
//# sourceMappingURL=media-events.component.js.map