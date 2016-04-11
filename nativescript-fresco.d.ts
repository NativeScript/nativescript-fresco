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
         * String value used by FrescoDrawee image's URI.
         */
        imageUri: string;
        
         /**
         * String value used by FrescoDrawee image's placeholder URI.
         */
        placeholderImageUri: string;
        
         /**
         * String value used by FrescoDrawee image's scale type. This property can be set to
         * 'center', 'center_crop', 'center_inside', 'fit_center', 'fit_end', 'fit_start', 'fit_xy', 'matrix'.
         */
        actualImageScaleType: string;
        
        /**
         * Number value used by FrescoDrawee to set its fade duration.
         */
        fadeDuration: number;
        
        /**
         * String value used by FrescoDrawee to set its background Drawable.
         */
        background: string;
    }
}