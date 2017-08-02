import { Component, Inject, EventEmitter, Input, Output, OnInit } from '@angular/core'
import { IDimensions } from '../utilities/interfaces/IDimensions'
import { ICameraService } from '../utilities/services/ICamera.service'

@Component({
  selector: 'camera-angulara-component',
  template: `
    <video-angulara-component *ngIf="stream" [srcObject]="stream" (onCanPlay)="streamOnCanPlay()"
                              [height]="video.height" [width]="video.width" [(ngModel)]="videoObj"
                              [service]="service"
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
 * @implements {OnInit}
 */
export class CameraAngularaComponent implements OnInit {
  /**
   * The number of seconds you want for the camera to countdown before the picture takes.
   * @type {number}
   */
  @Input() countdown: number

  /**
   * The width of the image in pixels.
   * @type {number}
   */
  @Input() width: number = 320

  /**
   * The height of the image in pixels.
   * @type {number}
   */
  @Input() height: number = 0

  /**
   * The desired format of the image (as in JPEG, PNG, etc).
   * @type {string}
   */
  @Input() imageFormat: string

  /**
   * The message to be displayed upon capture.
   * @type {string}
   */
  @Input() captureMessage: string

  /**
   * The service used to upload the image
   * @type {ICameraService}
   */
  @Input() service: ICameraService

  /**
   * An indicator that fires when the picture is taken allowing for a parent component to be
   * able to listen for the image's being taken.
   * @type {EventEmitter<Object>}
   */
  @Output() onPhotoCapture: EventEmitter<object> = new EventEmitter<object>()

  image: ImageBitmap
  stream: MediaStream
  streaming: boolean = false
  canvas: IDimensions
  video: IDimensions
  videoObj: object

  constructor (@Inject('Navigator') private navigator: Navigator) {
  }

  ngOnInit () {
    this.video = {height: this.height, width: this.width}
    this.canvas = {height: this.height, width: this.width}
    this.navigator.mediaDevices.getUserMedia(({video: true, audio: false}))
      .then((stream) => this.stream = stream)
  }

  /**
   * This is passed as an event listener to the {@code canplay} event on video.
   * This sets the video to be streaming when it can play.
   */
  streamOnCanPlay () {
    if (!this.streaming) {
      this.streaming = true
    }
  }

  /**
   * The method called upon the button click to take a picture.
   */
  takePhoto () {
    this.service.upload(this.videoObj).subscribe(
      _ => {
        this.onPhotoCapture.emit(this.image)
        this.image = null
      }
      // TODO: Add error handling
    )
  }
}
