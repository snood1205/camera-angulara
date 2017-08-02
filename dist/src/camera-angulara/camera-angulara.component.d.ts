import { EventEmitter, OnInit } from '@angular/core';
import { IDimensions } from '../utilities/interfaces/IDimensions';
import { ParentCameraComponent } from '../utilities/components/parent-camera.component';
export declare class CameraAngularaComponent extends ParentCameraComponent implements OnInit {
    private navigator;
    /**
     * An indicator that fires when the picture is taken allowing for a parent component to be
     * able to listen for the image's being taken.
     * @type {EventEmitter<Object>}
     */
    onPhotoCapture: EventEmitter<{
        image;
        video;
    }>;
    image: ImageBitmap;
    stream: MediaStream;
    streaming: boolean;
    canvas: IDimensions;
    video: IDimensions;
    videoObj: object;
    constructor(navigator: Navigator);
    ngOnInit(): void;
    /**
     * This is passed as an event listener to the {@code canplay} event on video.
     * This sets the video to be streaming when it can play.
     */
    streamOnCanPlay(): void;
    /**
     * The method called upon the button click to take a picture.
     */
    takePhoto(): void;
}
