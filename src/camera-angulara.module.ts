import { NgModule } from '@angular/core'

@NgModule({
  providers: [
    {provide: 'Window', useValue: window},
    {provide: 'Navigator', useValue: navigator}
  ]
})
export class CameraAngularaModule {
}