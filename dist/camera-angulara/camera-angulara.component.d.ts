import { OnInit } from '@angular/core';
import { IDimensions } from '../utilities/interfaces/IDimensions';
export declare class CameraAngularaComponent implements OnInit {
    private navigator;
    countdown: number;
    width: number;
    height: number;
    imageFormat: string;
    captureMessage: string;
    stream: MediaStream;
    streaming: boolean;
    canvas: IDimensions;
    video: IDimensions;
    constructor(navigator: Navigator);
    ngOnInit(): void;
    streamOnCanPlay(): void;
}
