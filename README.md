# Welcome to `nativescript-fresco`

## What is `nativescript-fresco`?
`nativescript-fresco` is a NativeScript plugin that exposes the Fresco library used for efficiently displaying images on Android. More information about what Fresco is and how it works is available on its official website [here](https://code.facebook.com/posts/366199913563917/introducing-fresco-a-new-image-library-for-android/).

The `nativescript-fresco` plugin enables NativeScript developers to use the `FrescoDrawee` class which is extends the traditional Android ImageView component and adds the smart Fresco image management algorithms. The plugin exposes the drawee as a NativeScript view so you basically put it in the XML definition of your page and provide the URI to the image you would like to use.

## How to use `nativescript-fresco`?
1. Clone the repository and go to the root directory on your computer.
2. Use `tsc` to transpile the `.ts` sources: `tsc -p`.
3. Go to the root folder of your {N} application where you would like to install the plugin and type `tns plugin add <path-to-fresco-repo-dir>`.
4. Initialize `nativescript-fresco` in the `launch` event of your {N} application by using the following code:

```JavaScript
var application = require("application");
var fresco = require("nativescript-fresco");

if (application.android) {
    application.onLaunch = function (intent) {
        fresco.initialize();
    };
}
```
```TypeScript
import application = require("application");
import fresco = require("nativescript-fresco");

if (application.android) {
    application.onLaunch = function (intent) {
        fresco.initialize();
    };
}
```

Use `fresco` in the XML definition of the page as follows:

```XML
<Page
    xmlns="http://www.nativescript.org/tns.xsd" 
    xmlns:Fresco="nativescript-fresco">
    <Fresco:FrescoDrawee width="250" 
						 height="250"
					     imageUri="<uri-to-a-photo-from-the-web-or-a-local-resource>"/>
</Page>
```

## Attributes

As documented by the Fresco library setting the **height and width** are **mandatory**, more details on this topic could be found [here](http://frescolib.org/docs/using-drawees-xml.html#height-and-width-mandatory). SO the first this you should do when declaring the FrescoDrawee is set its **width** and **height** attributes.

### Basic attributes

- **imageUri** - String value used for the image URI. You can use this property to set the image to be loaded from remote location (http, https) or from the resources files of your {N} application.

### Advanced *optional* attributes

There are a couple of *optional* attributes that could be set on the FrescoDrawee instance to achieve advanced behaviors:

- **placeholderImageUri** 

String value used for the placeholder image URI. You can use this property to set a placeholder image loaded from the local and resources files of your {N} application.

- **backgroundUri** 

String value used for the background image URI. Using this property has similar effect as the placeholderImageUri but the image is stretched to the size of the FrescoDrawee.

- **failureImageUri** 

String value used for the failure image URI. You can use this property to set a failure image loaded from the local and resources files of your {N} application that will be shown if the loading of the imageUri is not successful.

- **actualImageScaleType** 

String value used by FrescoDrawee image scale type. This property can be set to:

'*center*' - Performs no scaling.

'*centerCrop*' - Scales the child so that both dimensions will be greater than or equal to the corresponding dimension of the parent.

'*centerInside*' - Scales the child so that it fits entirely inside the parent.

'*fitCenter*' - Scales the child so that it fits entirely inside the parent.

'*fitStart*' - Scales the child so that it fits entirely inside the parent.

'*fitEnd*' - Scales the child so that it fits entirely inside the parent.

'*fitXY*' - Scales width and height independently, so that the child matches the parent exactly

'*focusCrop*' - Scales the child so that both dimensions will be greater than or equal to the corresponding dimension of the parent.

- **fadeDuration** 

Number value used for the fade-in duration. This value is in milliseconds.

- **progressiveRenderingEnabled** 

Boolean value used for enabling or disabling the streaming of progressive JPEG images. This property is set to 'false' by default. Setting this property to 'true' while loading JPEG images not encoded in progressive format will lead to a standard loading of those images.

- **showProgressBar** 

Boolean value used for showing or hiding the progress bar.

- **progressBarColor** 

String value used for setting the color of the progress bar. You can set it to hex values ("*#FF0000*") and/or predefined colors ("*green*").

- **roundAsCircle** 

Boolean value used for determining if the image will be rounded as a circle. Its default value is false. If set to true the image will be rounder to a circle.

- **roundedCornerRadius** 

Number value used as radius for rounding the image's corners.

- **roundBottomRight** 

Boolean value used for determining if the image's bottom right corner will be rounded.

- **roundBottomLeft** 

Boolean value used for determining if the image's bottom left corner will be rounded.

- **roundTopLeft** 

Boolean value used for determining if the image's top left corner will be rounded.

- **roundTopRight** 

Boolean value used for determining if the image's top right corner should be rounded.

- **autoPlayAnimations** 

Boolean value used for enabling the automatic playing of animated images. Note that rounding of such images is not supported and will be ignored.

### Events

- **finalImageSet** 

This event is fired after the final image has been set.

- **failure** 

This event is fired after the fetch of the final image failed.

- **intermediateImageSet** 

This event is fired after any intermediate image has been set.

- **intermediateImageFailed** 

This event is fired after the fetch of the intermediate image failed.

- **submit** 

This event is fired before the image request is submitted.

- **release** 

This event is fired after the controller released the fetched image.

## Sample Screenshots

All of the images are sample images for showcasing purposes.

Sample 1 - Placeholder image |  Sample 2 - Transition (fade-in animation)
-------- | ---------
![Placeholder image sample](/Users/amiorkov/Desktop/Work/nativescript-fresco/screenshots/screen1-with-placeholder.png) | ![Transition sample](/Users/amiorkov/Desktop/Work/nativescript-fresco/screenshots/screen2-transition-effect.png)

Sample 3 - Image shown successfully from imageUri |  Sample 4 - Failure image when unsuccessful imageUri
-------- | ---------
![Successfully shown image sample](/Users/amiorkov/Desktop/Work/nativescript-fresco/screenshots/screen3-successful-show.png) | ![Successfully shown image sample](/Users/amiorkov/Desktop/Work/nativescript-fresco/screenshots/screen4-unsuccessful-show.png)
