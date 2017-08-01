import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core'
import { IVideoElementAttributes } from '../../interfaces/IVideoElementAttributes'
import { MediaEventsComponent } from '../media-events/media-events.component'

@Component({
  selector: 'video-angulara-component',
  template: `
      <video #videoEl [height]="height" [width]="width">{{alt}}</video>`
})
export class VideoAngularaComponent extends MediaEventsComponent implements OnInit {
  @Input() alt: string
  @Input() autoplay: boolean = false
  @Input() buffered?: TimeRanges
  @Input() controls: boolean = false
  @Input() crossOrigin: 'anonymous' | 'use-credentials' | null = null
  @Input() height: number = 0
  @Input() loop: boolean = false
  @Input() muted: boolean = false
  @Input() played?: TimeRanges
  @Input() preload: 'none' | 'metadata' | 'auto' | '' = 'auto'
  @Input() poster: string = ''
  @Input() src: string = ''
  @Input() srcObject: object = null
  @Input() streaming: boolean
  @Input() width: number = 0
  @ViewChild('videoEl') private videoEl: ElementRef

  ngOnInit () {
    super.ngOnInit()
    Object.assign(this.video, this.constructVideoElementAttributes())
    this.mediaElement = this.video
    this.eventListeners.canplay.options.arguments = [{height: this.video.videoHeight, width: this.video.videoWidth}]
    this.eventListeners.canplay.options.runOnce = true
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

  private constructVideoElementAttributes (): IVideoElementAttributes {
    return {
      autoplay: this.autoplay,
      buffered: this.buffered || this.video.buffered,
      controls: this.controls,
      crossOrigin: this.crossOrigin,
      height: this.height,
      loop: this.loop,
      muted: this.muted,
      played: this.played || this.video.buffered,
      preload: this.preload,
      poster: this.poster,
      src: this.src,
      srcObject: this.srcObject,
      width: this.width
    }
  }
}
