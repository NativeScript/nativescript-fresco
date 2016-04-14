/**
 * Contains the FrescoDrawee class, which represents optimized image widget.
 */
declare module "nativescript-fresco" {
    /**
     * When called, initializes the android Fresco library. Calling this method is required.
     * A good place to call it is at the application onLaunch() method.
     */
    function initialize(): void;
    
    
    export class FrescoDrawee {
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
         * String value used by FrescoDrawee image scale type. This property can be set to
         * 'center', 'centerCrop', 'centerInside', 'fitCenter', 'fitEnd', 'fitStart', 'fitXY' and 'focusCrop'.
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
    }
    
    export enum ScaleType {
        center,
        centerCrop,
        centerInside,
        fitCenter,
        fitEnd,
        fitStart,
        fitXY,
        focusCrop
    }
}