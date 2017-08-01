import { Component, Inject, EventEmitter, Input, Output, OnInit } from '@angular/core'
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
/**
 * The main component for camera angulara. It has 5 possible inputs and is what
 * the end user should use in their application as 'camera-angulara-component'.
 *
 * @author Eli Sadoff <snood1205@gmail.com>
 */
export class CameraAngularaComponent implements OnInit {
  /**
   * The number of seconds you want for the camera to countdown before the picture takes.
   */
  @Input() countdown: number

  /**
   * The width of the image in pixels.
   */
  @Input() width: number = 320

  /**
   * The height of the image in pixels.
   */
  @Input() height: number = 0

  /**
   * The desired format of the image (as in JPEG, PNG, etc).
   */
  @Input() imageFormat: string

  /**
   * The message to be displayed upon capture.
   */
  @Input() captureMessage: string
  @Output() onPhotoCapture: EventEmitter<object> = new EventEmitter<object>()

  image: ImageBitmap
  stream: MediaStream
  streaming: boolean = false
  canvas: IDimensions
  video: IDimensions
  videoObj: object

  constructor( @Inject('Navigator') private navigator: Navigator, private cameraService: ICameraService) {
  }

  ngOnInit() {
    this.video = { height: this.height, width: this.width }
    this.canvas = { height: this.height, width: this.width }
    this.navigator.mediaDevices.getUserMedia(({ video: true, audio: false }))
      .then((stream) => this.stream = stream)
  }

  streamOnCanPlay() {
    if (!this.streaming) {
      this.streaming = true
    }
  }

  takePhoto() {
    this.cameraService.upload(this.videoObj)
    this.onPhotoCapture.emit(this.image)
  }
}
