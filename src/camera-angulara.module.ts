import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CameraAngularaComponent } from './camera-angulara/camera-angulara.component'
import { MediaModule } from './utilities/media-module/media.module'
import { UserCameraComponent } from './utilities/components/user-camera.component'
import { ParentCameraComponent } from './utilities/components/parent-camera.component'

@NgModule({
  imports: [
    BrowserModule,
    MediaModule
  ],
  providers: [
    {provide: 'Window', useValue: window},
    {provide: 'Navigator', useValue: navigator}
  ],
  declarations: [CameraAngularaComponent, ParentCameraComponent, UserCameraComponent],
  entryComponents: [UserCameraComponent],
  exports: [UserCameraComponent]
})
export class CameraAngularaModule {
}
