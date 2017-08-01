import { Component, ElementRef, forwardRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core'
import { IVideoElementAttributes } from '../../interfaces/IVideoElementAttributes'
import { MediaEventsComponent } from '../media-events/media-events.component'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'video-angulara-component',
  template: `
      <video #videoEl [height]="height" [width]="width" [(ngModel)]="videoObj">{{alt}}</video>`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => VideoAngularaComponent),
      multi: true
    }]
})
export class VideoAngularaComponent extends MediaEventsComponent implements OnInit, ControlValueAccessor {
  @Input() alt: string
  @Input() autoplay: boolean = false
  @Input() controls: boolean = false
  @Input() crossOrigin: 'anonymous' | 'use-credentials' | null = null
  @Input() height: number = 0
  @Input() loop: boolean = false
  @Input() muted: boolean = false
  @Input() preload: 'none' | 'metadata' | 'auto' | '' = 'auto'
  @Input() poster: string = ''
  @Input() src: string = ''
  @Input() srcObject: object = null
  @Input() streaming: boolean
  @Input() width: number = 0
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

  ngOnChanges () {
    console.log(this.videoObj)
  }

  writeValue (value) {
    this.value = value
    this.onChange(value)
  }

  get video (): HTMLVideoElement {
    if (this.videoEl == null) {
      return null
    }
    return this.videoEl.nativeElement
  }

  set video (video: HTMLVideoElement) {
    this.videoEl.nativeElement = video
  }

  get value () {
    return this.videoObj
  }

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
