import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
export interface ICameraService {
    constructor(http: Http): any;
    upload(): Observable<object>;
}
