import { OnInit } from '@angular/core';
import { MediaEventsComponent } from '../media-events/media-events.component';
export declare class VideoAngularaComponent extends MediaEventsComponent implements OnInit {
    private videoEl;
    alt: string;
    autoplay: boolean;
    buffered?: TimeRanges;
    controls: boolean;
    crossOrigin: 'anonymous' | 'use-credentials' | null;
    height: number;
    loop: boolean;
    muted: boolean;
    played?: TimeRanges;
    preload: 'none' | 'metadata' | 'auto' | '';
    poster: string;
    src: string;
    srcObject: object;
    width: number;
    ngOnInit(): void;
    video: HTMLVideoElement;
    private constructVideoElementAttributes();
}
