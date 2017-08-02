import { Component, Input } from '@angular/core'
import { ICameraService } from '../services/ICamera.service'

@Component({template: ''})
/**
 * This class should be extended by the user to implement the class they use.
 * It should have a template similar to this:
 * {@code `
 * <camera-angulara-component [height]="height" [width]="width" [countdown]="countdown"
 *                            [imageFormat]="imageFormat" captureMessage="captureMessage">
 * </camera-angulara-component>
 * `}
 */
export class UserCameraComponent {
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
  protected cameraService: ICameraService
}
