import { Observable } from 'rxjs/Observable'
import { Http } from '@angular/http'

export interface ICameraService {
  constructor(http: Http)

  upload(): Observable<object>
}