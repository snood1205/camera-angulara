import { Observable } from 'rxjs/Observable';
/**
 * This is the minimum requirements for a service that uploads the photo
 * that was taken.
 * @author Eli Sadoff <snood1205@gmail.com>
 */
export interface ICameraService {
    /**
     * This method must upload the provided image to the server.
     *
     * @return {Observable<object>} an observable containing the server response including the image
     */
    upload(image: any): Observable<object>;
}
