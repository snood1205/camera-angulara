import { Component, ElementRef, EventEmitter, forwardRef, Input, OnInit, Output, ViewChild } from '@angular/core'
import { IVideoElementAttributes } from '../../interfaces/IVideoElementAttributes'
import { MediaEventsComponent } from '../media-events/media-events.component'
import { NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'video-angulara-component',
  template: `
    <video #videoEl [height]="height" [width]="width">{{alt}}</video>`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => VideoAngularaComponent),
      multi: true
    }]
})
/**
 * A component to wrap HTML5's video component to allow for more complete usage.
 *
 * @author Eli Sadoff <snood1205@gmail.com>
 * @extends {MediaEventsComponent} for the purpose of getting event listeners
 * @implements {OnInit}
 */
export class VideoAngularaComponent extends MediaEventsComponent implements OnInit {

  /**
   * The alt string to display when the video is not able to display.
   * @type {string}
   */
  @Input() alt: string

  /**
   * Whether or not the video plays upon ready (default: {@code false}).
   * @type {boolean}
   */
  @Input() autoplay: boolean = false

  /**
   * Whether or not the video has (default) controls (default: {@code false}).
   * @type {boolean}
   */
  @Input() controls: boolean = false

  /**
   * The type of cross origin requests allowed (default: {@code null}).
   * @type {'anonymous'|'use-credentials'|null}
   */
  @Input() crossOrigin: 'anonymous' | 'use-credentials' | null = null

  /**
   * The height of the video (default: {@code 0}).
   * @type {number}
   */
  @Input() height: number = 0

  /**
   * Whether or not the video is to loop (go back to the start automatically) after it is
   * finished playing (default: {@code false})
   * @type {boolean}
   */
  @Input() loop: boolean = false

  /**
   * Whether or not the video is muted (default: {@code false}).
   * @type {boolean}
   */
  @Input() muted: boolean = false

  /**
   * The type of preload for the video (default: {@code 'auto'}
   * @type {'none'|'metadata'|'auto'|''}
   */
  @Input() preload: 'none' | 'metadata' | 'auto' | '' = 'auto'

  /**
   * The URL to the poster frame for the video (default: {@code ''})
   * @type {string}
   */
  @Input() poster: string = ''

  /**
   * The source URL for the video (default: {@code ''})
   * @type {string}
   */
  @Input() src: string = ''

  /**
   * The source object for the video (default: {@code null})
   * @type {object}
   */
  @Input() srcObject: object = null

  /**
   * Whether or not the video is streaming (default: {@code false}).
   * @type {boolean}
   */
  @Input() streaming: boolean = false

  /**
   * The width of the video in pixels (default: {@code 0}).
   * @type {number}
   */
  @Input() width: number = 0

  @Output() ngModelChange = new EventEmitter()

  videoObj
  onChange: (_) => void
  onTouched: () => void
  @ViewChild('videoEl') private videoEl: ElementRef

  ngOnInit () {
    super.ngOnInit()
    Object.assign(this.video, this.constructVideoElementAttributes())
    this.mediaElement = this.video
    this.eventListeners.canplay.options.runOnce = true
  }

  writeValue (value) {
    this.value = value
    this.onChange(value)
  }

  @Input()
  get ngModel () {
    return this.srcObject
  }

  set ngModel (srcObject) {
    this.srcObject = srcObject
    this.ngModelChange.emit(this.srcObject)
  }

  get video (): HTMLVideoElement {
    return this.videoEl == null ? null : this.videoEl.nativeElement
  }

  set video (video: HTMLVideoElement) {
    this.videoEl.nativeElement = video
  }

  get value () {
    return this.videoObj
  }

  @Input()
  set value (value) {
    if (this.videoObj !== value) {
      this.videoObj = value
      this.onChange(value)
    }
  }

  registerOnChange (fn) {
    this.onChange = fn
  }

  registerOnTouched (fn) {
    this.onTouched = fn
  }

  private constructVideoElementAttributes (): IVideoElementAttributes {
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
    }
  }
}
