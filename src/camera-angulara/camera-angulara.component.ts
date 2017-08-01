import { Component, Inject, Input, OnInit } from '@angular/core'
import { IDimensions } from '../utilities/interfaces/IDimensions'

@Component({
  selector: 'camera-angulara-component',
  template: `
      <video-angulara-component *ngIf="stream" [srcObject]="stream" (onCanPlay)="resizeOnCanPlay(dimensions)"
                                [height]="video.height" [width]="video.width"
                                [alt]="'Video stream is not available.'"></video-angulara-component>
      <button (click)="takePhoto()">Take Photo</button>
      <canvas [width]="canvas.width" [height]="canvas.height"></canvas>
      <div class="output">
          <img alt="User's screen capture">
      </div>`
})
export class CameraAngularaComponent implements OnInit {
  @Input() countdown: number
  @Input() canvas: IDimensions
  @Input() video: IDimensions
  @Input() width: number = 320
  @Input() imageFormat: string
  @Input() captureMessage: string

  stream: MediaStream
  height: number = 0
  streaming: boolean = false

  constructor (@Inject('Navigator') private navigator: Navigator) {
  }

  ngOnInit () {
    this.video = {height: this.height, width: this.width}
    this.canvas = {height: this.height, width: this.width}
    this.navigator.mediaDevices.getUserMedia(({video: true, audio: false}))
      .then((stream) => this.stream = stream)
  }

  resizeOnCanPlay (video) {
    if (!this.streaming) {
      this.height = video.videoHeight / (video.videoWidth / this.width)
      this.streaming = true
    }
  }
}
