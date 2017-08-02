export declare class ParentCameraComponent {
    /**
     * The number of seconds you want for the camera to countdown before the picture takes.
     * @type {number}
     */
    countdown: number;
    /**
     * The width of the image in pixels.
     * @type {number}
     */
    width: number;
    /**
     * The height of the image in pixels.
     * @type {number}
     */
    height: number;
    /**
     * The desired format of the image (as in JPEG, PNG, etc).
     * @type {string}
     */
    imageFormat: string;
    /**
     * The message to be displayed upon capture.
     * @type {string}
     */
    captureMessage: string;
}
