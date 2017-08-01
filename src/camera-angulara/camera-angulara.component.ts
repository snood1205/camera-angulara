import { Component, Inject, Input, OnInit } from '@angular/core'
import { IDimensions } from '../utilities/interfaces/IDimensions'

@Component({
  selector: 'camera-angulara-component',
  templateUrl: './camera-angulara.component.html'
})
export class CameraAngularaComponent implements OnInit {
  @Input() countdown: number
  @Input() outputDimensions: IDimensions
  @Input() viewerDimensions: IDimensions
  @Input() width: number = 320
  @Input() imageFormat: string
  @Input() captureMessage: string

  stream: MediaStream
  height: number = 0
  streaming: boolean = false

  constructor (@Inject('Navigator') private navigator: Navigator) {
  }

  ngOnInit () {
    this.navigator.mediaDevices.getUserMedia(({video: true, audio: false}))
      .then((stream) => this.stream = stream)
  }
}
