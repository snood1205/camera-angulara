import { Component, Inject, EventEmitter, Input, Output, OnInit } from '@angular/core'
import { IDimensions } from '../utilities/interfaces/IDimensions'
import { ParentCameraComponent } from '../utilities/components/parent-camera.component'

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
 * @implements {OnInit}
 */
export class CameraAngularaComponent extends ParentCameraComponent implements OnInit {
  /**
   * An indicator that fires when the picture is taken allowing for a parent component to be
   * able to listen for the image's being taken.
   * @type {EventEmitter<Object>}
   */
  @Output() onPhotoCapture: EventEmitter<{image, video}> = new EventEmitter<{image, video}>()

  image: ImageBitmap
  stream: MediaStream
  streaming: boolean = false
  canvas: IDimensions
  video: IDimensions
  videoObj: object

  constructor (@Inject('Navigator') private navigator: Navigator) {
    super()
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
    this.onPhotoCapture.emit({video: this.videoObj, image: this.image})
  }
}
