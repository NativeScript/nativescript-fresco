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
         * String value used for the image's URI.
         */
        imageUri: string;
        
         /**
         * String value used for the placeholder image's URI.
         */
        placeholderImageUri: string;
        
          /**
         * String value used for the failure image's URI.
         */
        failureImageUri: string;
        
         /**
         * String value used by FrescoDrawee image's scale type. This property can be set to
         * 'center', 'center_crop', 'center_inside', 'fit_center', 'fit_end', 'fit_start', 'fit_xy', 'matrix'.
         */
        actualImageScaleType: string;
        
        /**
         * Number value used for the fade-in duration. This value is in milliseconds.
         */
        fadeDuration: number;
        
        /**
         * String value used for the background image's URI.
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
    }
}