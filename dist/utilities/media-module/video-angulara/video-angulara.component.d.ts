import { EventEmitter, OnInit } from '@angular/core';
import { MediaEventsComponent } from '../media-events/media-events.component';
export declare class VideoAngularaComponent extends MediaEventsComponent implements OnInit {
    /**
     * The alt string to display when the video is not able to display.
     * @type {string}
     */
    alt: string;
    /**
     * Whether or not the video plays upon ready (default: {@code false}).
     * @type {boolean}
     */
    autoplay: boolean;
    /**
     * Whether or not the video has (default) controls (default: {@code false}).
     * @type {boolean}
     */
    controls: boolean;
    /**
     * The type of cross origin requests allowed (default: {@code null}).
     * @type {'anonymous'|'use-credentials'|null}
     */
    crossOrigin: 'anonymous' | 'use-credentials' | null;
    /**
     * The height of the video (default: {@code 0}).
     * @type {number}
     */
    height: number;
    /**
     * Whether or not the video is to loop (go back to the start automatically) after it is
     * finished playing (default: {@code false})
     * @type {boolean}
     */
    loop: boolean;
    /**
     * Whether or not the video is muted (default: {@code false}).
     * @type {boolean}
     */
    muted: boolean;
    /**
     * The type of preload for the video (default: {@code 'auto'}
     * @type {'none'|'metadata'|'auto'|''}
     */
    preload: 'none' | 'metadata' | 'auto' | '';
    /**
     * The URL to the poster frame for the video (default: {@code ''})
     * @type {string}
     */
    poster: string;
    /**
     * The source URL for the video (default: {@code ''})
     * @type {string}
     */
    src: string;
    /**
     * The source object for the video (default: {@code null})
     * @type {object}
     */
    srcObject: object;
    /**
     * Whether or not the video is streaming (default: {@code false}).
     * @type {boolean}
     */
    streaming: boolean;
    /**
     * The width of the video in pixels (default: {@code 0}).
     * @type {number}
     */
    width: number;
    ngModelChange: EventEmitter<{}>;
    videoObj: any;
    onChange: (_) => void;
    onTouched: () => void;
    private videoEl;
    ngOnInit(): void;
    writeValue(value: any): void;
    ngModel: object;
    video: HTMLVideoElement;
    value: any;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    private constructVideoElementAttributes();
}
