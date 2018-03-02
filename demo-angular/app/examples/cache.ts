import { EventData} from "tns-core-modules/data/observable";
import { FrescoDrawee, ImagePipeline } from "nativescript-fresco";
import { Button } from "tns-core-modules/ui/button";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import { Label } from "tns-core-modules/ui/label";
import * as frescoModel from "nativescript-fresco";
import { writeToOutputLabel } from "./appLogger";

var imageUri = "http://lorempixel.com/400/200/";

export function onCheckCache(args: EventData) {
    var button = args.object as Button;
    var gridLayout = button.parent as GridLayout;
    var drawee = gridLayout.getViewById("frescoDrawee") as FrescoDrawee;
    var imagePipeLine = frescoModel.getImagePipeline();
    var isInCache = imagePipeLine.isInBitmapMemoryCache(imageUri);
    writeToOutputLabel(drawee, ">>>>> Image is in the Bitmap memory cache - " + isInCache);

    // TODO: Uncomment this after upgrading the native Fresco library above the currently used 0.9.0+ version and make sure its is available in the new version. 
    // var isInDiskCache = imagePipeLine.isInDiskCacheSync(imageUri);
    // var message = ">>>>> Image is in the disk cache: " + isInDiskCache;
    // console.log(message);
    // writeToOutputLabel(drawee, message);
}

export function onClearCache(args: EventData) {
    var button = args.object as Button;
    var gridLayout = button.parent as GridLayout;
    var drawee = gridLayout.getViewById("frescoDrawee") as FrescoDrawee;
    var imagePipeLine = frescoModel.getImagePipeline();
    writeToOutputLabel(drawee, ">>>>> Clearning cache");

    imagePipeLine.clearCaches();
}

export function onSetImage(args: EventData) {
    var button = args.object as Button;
    var gridLayout = button.parent as GridLayout;
    var drawee = gridLayout.getViewById("frescoDrawee") as FrescoDrawee;
    drawee.imageUri = null;
    drawee.imageUri = imageUri;
}

export function onResetImage(args: EventData) {
    var button = args.object as Button;
    var gridLayout = button.parent as GridLayout;
    var drawee = gridLayout.getViewById("frescoDrawee") as FrescoDrawee;
    writeToOutputLabel(drawee, ">>>>> Refreshing cache and 'imageUri'");

    drawee.updateImageUri();
}