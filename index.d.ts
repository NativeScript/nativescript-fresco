import * as viewModule from "tns-core-modules/ui/core/view";

/**
 * When called, initializes the android Fresco library. Calling this method is required.
 * A good place to call it is at the application onLaunch() method.
 */
declare function initialize(): void;

/**
 * When called, initializes the android Fresco library. Calling this method is required.
 * A good place to call it is at the application onLaunch() method.
 */
declare function getImagePipeline(): ImagePipeline;

/**
* Encapsulates the common abstraction behind a platform specific object (typically a Bitmap) that is used view to show remote or local images.
*/
export class FrescoDrawee extends viewModule.View {
    /**
     * This event is fired after the final image has been set.
     */
    static finalImageSetEvent: string;

    /**
     * This event is fired after the fetch of the final image failed.
     */
    static failureEvent: string;

    /**
    * This event is fired after the fetch of the intermediate image failed.
    */
    static intermediateImageFailedEvent: string;

    /**
     * This event is fired after any intermediate image has been set.
     */
    static intermediateImageSetEvent: string;

    /**
     * This event is fired after the controller released the fetched image.
     */
    static releaseEvent: string;

    /**
     * This event is fired before the image request is submitted.
     */
    static submitEvent: string;

    /**
     * Removes all images with the specified Uri from the memory or/and disk and reinitialize the 'imageUri'.
     */
    updateImageUri(): void;

    /**
     * String value used for the image URI.
     */
    imageUri: string;

    /**
    * String value used for the placeholder image URI.
    */
    placeholderImageUri: string;

    /**
   * String value used for the failure image URI.
   */
    failureImageUri: string;

    /**
    * String value used by FrescoDrawee image scale type. This property can be set to:
    * 'center' - Performs no scaling.
    * 'centerCrop' - Scales the child so that both dimensions will be greater than or equal to the corresponding dimension of the parent. 
    * 'centerInside' - Scales the child so that it fits entirely inside the parent. 
    * 'fitCenter' - Scales the child so that it fits entirely inside the parent. 
    * 'fitStart' - Scales the child so that it fits entirely inside the parent.
    * 'fitEnd' - Scales the child so that it fits entirely inside the parent.
    * 'fitXY' - Scales width and height independently, so that the child matches the parent exactly.
    * 'focusCrop' - Scales the child so that both dimensions will be greater than or equal to the corresponding dimension of the parent.
    */
    actualImageScaleType: string;

    /**
     * Number value used for the fade-in duration. This value is in milliseconds.
     */
    fadeDuration: number;

    /**
     * String value used for the background image URI.
     */
    backgroundUri: string;

    /**
    * Boolean value used for enabling or disabling the streaming of progressive JPEG images.
    */
    progressiveRenderingEnabled: boolean;

    /**
     * Boolean value used for showing or hiding the progress bar.
     */
    showProgressBar: boolean;

    /**
    * String value used for setting the color of the progress bar. Can be set to hex values ("#FF0000"") and predefined colors ("green").
    */
    progressBarColor: string;

    /**
    * Boolean value used for determining if the image should be rounded as a circle.
    */
    roundAsCircle: boolean;

    /**
     * Boolean value used for determining if the image's bottom right corner should be rounded.
     */
    roundBottomRight: boolean;

    /**
    * Boolean value used for determining if the image's bottom left corner should be rounded.
    */
    roundBottomLeft: boolean;

    /**
     * Boolean value used for determining if the image's top left corner should be rounded.
     */
    roundTopLeft: boolean;

    /**
     * Boolean value used for determining if the image's top right corner should be rounded.
     */
    roundTopRight: boolean;

    /**
     * Number value used as radius for rounding the image's corners.
     */
    roundedCornerRadius: number;

    /**
     * Boolean value used for enabling/disabling automatic playing of animated images.
     */
    autoPlayAnimations: boolean;

    /**
     * Boolean value used for enabling/disabling a tap to retry action for the download of the FrescoDrawee image.
     */
    tapToRetryEnabled: boolean;

    /**
     * Number value used as the aspect ratio of the image.
     */
    aspectRatio: number;
}

/**
* Encapsulates the common abstraction behind a platform specific object (typically a Bitmap) quality.
*/
export interface QualityInfo {
    getQuality(): number;

    isOfFullQuality(): boolean;

    isOfGoodEnoughQuality(): boolean;
}

/**
* Encapsulates the common abstraction behind a platform specific object (typically a Bitmap's quality) details.
*/
export class ImageInfo {
    getHeight(): number;

    getWidth(): number;

    getQualityInfo(): QualityInfo;
}

/**
* Interface of the common abstraction behind a platform specific error object that is used by the FrescoDrawee's events.
*/
export interface IError {
    /**
    * Returns the message of the Error.
    */
    getMessage(): string;

    /**
    * Returns the type (typically the class name) of the Error.
    */
    getErrorType(): string;

    /**
    * Returns the string representation of the Error.
    */
    toString(): string;
}

/**
* Encapsulates the common abstraction behind a platform specific error object that is used by the FrescoDrawee's events.
*/
export class FrescoError {
    /**
    * Returns the message of the Error.
    */
    getMessage(): string;

    /**
    * Returns the type (typically the class name) of the Error.
    */
    getErrorType(): string;

    /**
    * Returns the string representation of the Error.
    */
    toString(): string;
}

/**
* Instances of this class are provided to the handlers of the {@link release} and {@link submit}.
*/
export class EventData {
    /**
    * Returns the name of the event that has been fired.
    */
    eventName: string;

    /**
    * The object that fires the event.
    */
    object: any;
}

/**
* Instances of this class are provided to the handlers of the {@link finalImageSet}.
*/
export class FinalEventData {
    /**
    * Returns the name of the event that has been fired.
    */
    eventName: string;

    /**
    * The object that fires the event.
    */
    object: any;

    /**
    * Contains information about an image.
    */
    imageInfo: ImageInfo;

    /**
    * An object that renders an animated image.
    */
    animatable: AnimatedImage;
}

/**
* Instances of this class are provided to the handlers of the {@link intermediateImageSet}.
*/
export class IntermediateEventData {
    /**
    * Returns the name of the event that has been fired.
    */
    eventName: string;

    /**
    * The object that fires the event.
    */
    object: any;

    /**
    * Contains information about an image.
    */
    imageInfo: ImageInfo;
}

/**
* Instances of this class are provided to the handlers of the {@link failure} and {@link intermediateImageFailed}.
*/
export class FailureEventData {
    /**
    * Returns the name of the event that has been fired.
    */
    eventName: string;

    /**
    * The object that fires the event.
    */
    object: any;

    /**
    * An object containing information about the status of the event.
    */
    error: FrescoError;
}

/**
* Interface of the common abstraction behind a platform specific animated image object.
*/
export interface IAnimatedImage {
    /**
     * Starts the AnimatedDrawable image.
     */
    start(): void;

    /**
     * Stops the AnimatedDrawable image.
     */
    stop(): void;

    /**
     * Returns boolean value representing the if the AnimatedDrawable's is being animated.
     */
    isRunning(): boolean;
}

/**
 * Encapsulates the common abstraction behind a platform specific animated image object.
 */
export class AnimatedImage {
    /**
     * Starts the AnimatedImage image.
     */
    start(): void;

    /**
     * Stops the AnimatedImage image.
     */
    stop(): void;

    /**
     * Returns boolean value representing the if the AnimatedImage's is being animated.
     */
    isRunning(): boolean;
}

/**
 * The entry point for the image pipeline..
 */
export class ImagePipeline {
    /**
     * Returns whether the image is stored in the bitmap memory cache.
     */
    isInBitmapMemoryCache(uri: string): boolean;

    /**
     * Returns whether the image is stored in the disk cache.
     */
    private isInDiskCacheSync(uri: string): boolean;

    /**
     * Removes all images with the specified Uri from memory cache.
     */
    evictFromMemoryCache(uri: string): void;

    /**
     * Removes all images with the specified Uri from disk cache.
     */
    evictFromDiskCache(uri: string): void;

    /**
     * Removes all images with the specified Uri from all the caches (memory and disk).
     */
    evictFromCache(uri: string): void;

    /**
     * Clear all the caches (memory and disk).
     */
    clearCaches(): void;

    /**
     * Clear the memory caches.
     */
    clearMemoryCaches(): void;

    /**
     * Clear disk caches.
     */
    clearDiskCaches(): void;
}

/**
 * Options for scaling the child bounds to the parent bounds
 */
export enum ScaleType {
    /**
     * Performs no scaling.
     */
    center,
    /**
     * Scales the child so that both dimensions will be greater than or equal to the corresponding dimension of the parent.
     */
    centerCrop,
    /**
     * Scales the child so that it fits entirely inside the parent.
     */
    centerInside,
    /**
     * Scales the child so that it fits entirely inside the parent.
     */
    fitCenter,
    /**
     * Scales the child so that it fits entirely inside the parent.
     */
    fitEnd,
    /**
    * Scales the child so that it fits entirely inside the parent.
    */
    fitStart,
    /**
    * Scales width and height independently, so that the child matches the parent exactly.
    */
    fitXY,
    /**
    * Scales the child so that both dimensions will be greater than or equal to the corresponding dimension of the parent.
    */
    focusCrop
}