import { Component, Input } from '@angular/core'

@Component({})
export abstract class ParentCameraComponent {
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
}
