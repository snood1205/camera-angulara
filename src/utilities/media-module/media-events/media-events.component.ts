import { Component, Input, Output, EventEmitter, OnInit, Renderer2 } from '@angular/core'
import { Experimental } from '../../decorators/experimental.decorator'
import { IOutputBindingOptions } from '../../interfaces/IOutputBindingOptions'

@Component({})
export abstract class MediaEventsComponent implements OnInit {
  @Output() onAbort = new EventEmitter()
  @Output() onCanPlay = new EventEmitter()
  @Output() onCanPlayThrough = new EventEmitter()
  @Output() onDurationChange = new EventEmitter()
  @Output() onEmptied = new EventEmitter()
  @Output() @Experimental() onEncrypted = new EventEmitter()
  @Output() onEnded = new EventEmitter()
  @Output() onError = new EventEmitter()
  @Output() onInterruptBegin = new EventEmitter()
  @Output() onInterruptEnd = new EventEmitter()
  @Output() onLoadedData = new EventEmitter()
  @Output() onLoadedMetadata = new EventEmitter()
  @Output() onLoadStart = new EventEmitter()
  @Output() onPause = new EventEmitter()
  @Output() onPlay = new EventEmitter()
  @Output() onPlaying = new EventEmitter()
  @Output() onProgress = new EventEmitter()
  @Output() onRateChange = new EventEmitter()
  @Output() onSeeked = new EventEmitter()
  @Output() onSeeking = new EventEmitter()
  @Output() onStalled = new EventEmitter()
  @Output() onSuspend = new EventEmitter()
  @Output() onTimeUpdate = new EventEmitter()
  @Output() onVolumeChange = new EventEmitter()
  @Output() onWaiting = new EventEmitter()

  @Input() onAbortOptions: IOutputBindingOptions = {preventDefault: false}
  @Input() onCanPlayOptions: IOutputBindingOptions = {preventDefault: false}
  @Input() onCanPlayThroughOptions: IOutputBindingOptions = {preventDefault: false}
  @Input() onDurationChangeOptions: IOutputBindingOptions = {preventDefault: false}
  @Input() onEmptiedOptions: IOutputBindingOptions = {preventDefault: false}
  @Input() onEncryptedOptions: IOutputBindingOptions = {preventDefault: false}
  @Input() onEndedOptions: IOutputBindingOptions = {preventDefault: false}
  @Input() onErrorOptions: IOutputBindingOptions = {preventDefault: false}
  @Input() onInterruptBeginOptions: IOutputBindingOptions = {preventDefault: false}
  @Input() onInterruptEndOptions: IOutputBindingOptions = {preventDefault: false}
  @Input() onLoadedDataOptions: IOutputBindingOptions = {preventDefault: false}
  @Input() onLoadedMetadataOptions: IOutputBindingOptions = {preventDefault: false}
  @Input() onLoadStartOptions: IOutputBindingOptions = {preventDefault: false}
  @Input() onPauseOptions: IOutputBindingOptions = {preventDefault: false}
  @Input() onPlayOptions: IOutputBindingOptions = {preventDefault: false}
  @Input() onPlayingOptions: IOutputBindingOptions = {preventDefault: false}
  @Input() onProgressOptions: IOutputBindingOptions = {preventDefault: false}
  @Input() onRateChangeOptions: IOutputBindingOptions = {preventDefault: false}
  @Input() onSeekedOptions: IOutputBindingOptions = {preventDefault: false}
  @Input() onSeekingOptions: IOutputBindingOptions = {preventDefault: false}
  @Input() onStalledOptions: IOutputBindingOptions = {preventDefault: false}
  @Input() onSuspendOptions: IOutputBindingOptions = {preventDefault: false}
  @Input() onTimeUpdateOptions: IOutputBindingOptions = {preventDefault: false}
  @Input() onVolumeChangeOptions: IOutputBindingOptions = {preventDefault: false}
  @Input() onWaitingOptions: IOutputBindingOptions = {preventDefault: false}

  eventListeners: { [name: string]: { eventEmitter: EventEmitter<any>, options: IOutputBindingOptions, listener? } }

  constructor (protected mediaElement: HTMLMediaElement, protected renderer: Renderer2) {
  }

  ngOnInit () {
    this.eventListeners = {
      abort: {eventEmitter: this.onAbort, options: this.onAbortOptions},
      canplay: {eventEmitter: this.onCanPlay, options: this.onCanPlayOptions},
      canplaythrough: {eventEmitter: this.onCanPlayThrough, options: this.onCanPlayThroughOptions},
      durationchange: {eventEmitter: this.onDurationChange, options: this.onDurationChangeOptions},
      emptied: {eventEmitter: this.onEmptied, options: this.onEmptiedOptions},
      encrypted: {eventEmitter: this.onEncrypted, options: this.onEncryptedOptions},
      ended: {eventEmitter: this.onEnded, options: this.onEndedOptions},
      error: {eventEmitter: this.onError, options: this.onErrorOptions},
      interruptcegin: {eventEmitter: this.onInterruptBegin, options: this.onInterruptBeginOptions},
      interruptcnd: {eventEmitter: this.onInterruptEnd, options: this.onInterruptEndOptions},
      loadeddata: {eventEmitter: this.onLoadedData, options: this.onLoadedDataOptions},
      loadedmetadata: {eventEmitter: this.onLoadedMetadata, options: this.onLoadedMetadataOptions},
      loadstart: {eventEmitter: this.onLoadStart, options: this.onLoadStartOptions},
      pause: {eventEmitter: this.onPause, options: this.onPauseOptions},
      play: {eventEmitter: this.onPlay, options: this.onPlayOptions},
      playing: {eventEmitter: this.onPlaying, options: this.onPlayingOptions},
      progress: {eventEmitter: this.onProgress, options: this.onProgressOptions},
      ratechange: {eventEmitter: this.onRateChange, options: this.onRateChangeOptions},
      seeked: {eventEmitter: this.onSeeked, options: this.onSeekedOptions},
      seeking: {eventEmitter: this.onSeeking, options: this.onSeekingOptions},
      stalled: {eventEmitter: this.onStalled, options: this.onStalledOptions},
      suspend: {eventEmitter: this.onSuspend, options: this.onSuspendOptions},
      timeupdate: {eventEmitter: this.onTimeUpdate, options: this.onTimeUpdateOptions},
      volumechange: {eventEmitter: this.onVolumeChange, options: this.onVolumeChangeOptions},
      waiting: {eventEmitter: this.onWaiting, options: this.onWaitingOptions}
    }
    this.applyEventListeners()
  }

  play () {
    this.mediaElement.play()
  }

  private applyEventListeners () {
    Object.keys(this.eventListeners).forEach(key => {
      const value = this.eventListeners[key]
      if (this.eventListeners.hasOwnProperty(key)) {
        this.eventListeners[key].listener = this.renderer.listen(this.mediaElement, key, (event) => {
          if (value.options.preventDefault) {
            event.preventDefault()
          }
          value.eventEmitter.emit.apply(this, value.options.arguments)
          if (value.options.runOnce) return false
        })
      }
    })
  }
}
