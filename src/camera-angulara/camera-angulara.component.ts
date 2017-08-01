import { Component, Inject, Input, OnInit } from '@angular/core'
import { IDimensions } from '../utilities/interfaces/IDimensions'
import { ICameraService } from '../ICamera.service'

@Component({
  selector: 'camera-angulara-component',
  template: `
      <video-angulara-component *ngIf="stream" [srcObject]="stream" (onCanPlay)="streamOnCanPlay()"
                                [height]="video.height" [width]="video.width" [(ngModel)]="videoObj"
                                [alt]="'Video stream is not available.'"></video-angulara-component>
      <button (click)="takePhoto()">Take Photo</button>
      <canvas [width]="canvas.width" [height]="canvas.height"></canvas>
      <div class="output">
          <img alt="User's screen capture">
      </div>`
})
export class CameraAngularaComponent implements OnInit {
  @Input() countdown: number
  @Input() width: number = 320
  @Input() height: number = 0
  @Input() imageFormat: string
  @Input() captureMessage: string
  // @Output() onPhotoCapture: EventEmitter

  stream: MediaStream
  streaming: boolean = false
  canvas: IDimensions
  video: IDimensions
  videoObj: object

  constructor (@Inject('Navigator') private navigator: Navigator, private cameraService: ICameraService) {
  }

  ngOnInit () {
    this.video = {height: this.height, width: this.width}
    this.canvas = {height: this.height, width: this.width}
    this.navigator.mediaDevices.getUserMedia(({video: true, audio: false}))
      .then((stream) => this.stream = stream)
  }

  streamOnCanPlay () {
    if (!this.streaming) {
      this.streaming = true
    }
  }

  takePhoto () {
    this.cameraService.upload(this.videoObj)
  }
}
