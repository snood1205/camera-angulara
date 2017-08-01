export interface IVideoElementAttributes {
    autoplay: boolean;
    buffered: TimeRanges;
    controls: boolean;
    crossOrigin: 'anonymous' | 'use-credentials';
    height: number;
    loop: boolean;
    muted: boolean;
    played: TimeRanges;
    preload: 'none' | 'metadata' | 'auto' | '';
    poster: string;
    src: string;
    srcObject: object;
    width: number;
}
