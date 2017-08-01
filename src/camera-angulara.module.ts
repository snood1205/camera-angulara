import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CameraAngularaComponent } from './camera-angulara/camera-angulara.component'
import { MediaModule } from './utilities/media-module/media.module'

@NgModule({
  imports: [
    BrowserModule,
    MediaModule
  ],
  providers: [
    {provide: 'Window', useValue: window},
    {provide: 'Navigator', useValue: navigator}
  ],
  declarations: [CameraAngularaComponent],
  exports: [CameraAngularaComponent],
  entryComponents: [CameraAngularaComponent]
})
export class CameraAngularaModule {
}
