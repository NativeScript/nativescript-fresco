/**
 * Contains the FrescoDrawee class, which represents optimized image widget.
 */
declare module "nativescript-fresco" {
    /**
     * When called, initializes the android Fresco library. Calling this method is required.
     * A good place to call it is at the application onLaunch() method.
     */
    function initialize(): void;

    /**
    * Encapsulates the common abstraction behind a platform specific object (typically a Bitmap) that is used view to show remote or local images.
    */
    export class FrescoDrawee {
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
         * Boolean value used for enabling automatic playing of animated images.
         */
        autoPlayAnimations: boolean;
    }

    /**
     * Generic scheme for event arguments provided to handlers of events exposed
     * by a {@link FrescoDrawee}.
     */
    export class FrescoEventData {
        /**
        *Returns the name of the event that has been fired.
        */
        eventName: string;

        /**
        * The object that fires the event.
        */
        object: any
    }

    export enum ScaleType {
        center,
        centerCrop,
        centerInside,
        fitCenter,
        fitEnd,
        fitStart,
        fitXY,
        focusCrop,
        none
    }
}