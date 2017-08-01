import { OnInit } from '@angular/core';
import { MediaEventsComponent } from '../media-events/media-events.component';
export declare class VideoAngularaComponent extends MediaEventsComponent implements OnInit {
    alt: string;
    autoplay: boolean;
    controls: boolean;
    crossOrigin: 'anonymous' | 'use-credentials' | null;
    height: number;
    loop: boolean;
    muted: boolean;
    preload: 'none' | 'metadata' | 'auto' | '';
    poster: string;
    src: string;
    srcObject: object;
    streaming: boolean;
    width: number;
    private videoEl;
    ngOnInit(): void;
    video: HTMLVideoElement;
    private constructVideoElementAttributes();
}
