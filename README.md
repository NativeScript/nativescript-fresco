# Welcome to `nativescript-fresco`

## What is `nativescript-fresco`?
`nativescript-fresco` is a NativeScript plugin that exposes the Fresco library used for efficiently displaying images on Android. More information about what Fresco is and how it works is available on its official website here:

https://code.facebook.com/posts/366199913563917/introducing-fresco-a-new-image-library-for-android/

The `nativescript-fresco` plugin enables NativeScript developers to use the `FrescoDrawee` class which is extends the traditional Android ImageView component and adds the smart Fresco image management algorithms. The plugin exposes the drawee as a NativeScript view so you basically put it in the XML definition of your page and provide the URI to the image you would like to use.

## How to use `nativescript-fresco`?
1. Clone the repository and go to the root directory on your computer.
2. Use `tsc` to transpile the `.ts` sources: `tsc -p`.
3. Go to the root folder of your {N} application where you would like to install the plugin and type `tns plugin add <path-to-fresco-repo-dir>`.
4. Initialize `fresco` in the `launch` event of your {N} application by using the following code:
```JavaScript
var application = require("application");
if (application.android) {
    application.onLaunch = function (intent) {
        com.facebook.drawee.backends.pipeline.Fresco.initialize(application.android.context);
    };
}
```
Use `fresco` in the XML definition of the page as follows:
```XML
<Page
    xmlns="http://www.nativescript.org/tns.xsd" xmlns:f="fresco/fresco">
    <f:FrescoDrawee
        horizontalAlignment="stretch"
        height="250"
        imageUri="<uri-to-a-photo-from-the-web-or-a-local-resource>"/>
</Page>
```
