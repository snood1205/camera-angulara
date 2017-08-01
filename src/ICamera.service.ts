import { Observable } from 'rxjs/Observable'

export interface ICameraService {
  upload (image): Observable<object>
}
