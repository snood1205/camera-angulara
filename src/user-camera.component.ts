import { Component } from '@angular/core'
import { ParentCameraComponent } from './utilities/components/parent-camera.component'
import { ICameraService } from './utilities/services/ICamera.service'

@Component({})
/**
 * This class should be extended by the user to implement the class they use.
 * It should have a template similar to this:
 * {@code `
 * <camera-angulara-component [height]="height" [width]="width" [countdown]="countdown"
 *                            [imageFormat]="imageFormat" captureMessage="captureMessage">
 * </camera-angulara-component>
 * `}
 */
export class UserCameraComponent extends ParentCameraComponent {
  protected cameraService: ICameraService
}
