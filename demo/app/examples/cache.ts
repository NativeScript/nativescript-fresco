import { EventData} from "data/observable";
import { FrescoDrawee, ImagePipeline } from "nativescript-fresco";
import { Button } from "ui/button";
import { GridLayout } from "ui/layouts/grid-layout";
import { Label } from "ui/label";
import * as frescoModel from "nativescript-fresco";
import { writeToOutputLabel } from "./appLogger";

var imageUri = "http://lorempixel.com/400/200/";

export function onCheckCache(args: EventData) {
    var button = args.object as Button;
    var gridLayout = button.parent as GridLayout;
    var drawee = gridLayout.getViewById("frescoDrawee") as FrescoDrawee;
    var imagePipeLine = frescoModel.getImagePipeline();
    var isInCache = imagePipeLine.isInBitmapMemoryCache(imageUri);
    writeToOutputLabel(drawee, ">>>>> Image is in the Bitmap cache - " + isInCache);

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