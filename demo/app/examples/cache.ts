import { EventData} from "tns-core-modules/data/observable";
import { FrescoDrawee, ImagePipeline } from "nativescript-fresco";
import { Button } from "tns-core-modules/ui/button";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import { Label } from "tns-core-modules/ui/label";
import * as frescoModel from "nativescript-fresco";
import { writeToOutputLabel } from "./appLogger";

let imageUri = "https://raw.githubusercontent.com/NativeScript/nativescript-fresco/master/examples-data/breakfast1.jpg";

export function onCheckCache(args: EventData) {
    let button = args.object as Button;
    let gridLayout = button.parent as GridLayout;
    let drawee = gridLayout.getViewById("frescoDrawee") as FrescoDrawee;
    let imagePipeLine = frescoModel.getImagePipeline();
    let isInCache = imagePipeLine.isInBitmapMemoryCache(imageUri);
    writeToOutputLabel(drawee, ">>>>> Image is in the Bitmap memory cache - " + isInCache);

    // TODO: Uncomment this after upgrading the native Fresco library above the currently used 0.9.0+ version and make sure its is available in the new version.
    // var isInDiskCache = imagePipeLine.isInDiskCacheSync(imageUri);
    // var message = ">>>>> Image is in the disk cache: " + isInDiskCache;
    // console.log(message);
    // writeToOutputLabel(drawee, message);
}

export function onClearCache(args: EventData) {
    let button = args.object as Button;
    let gridLayout = button.parent as GridLayout;
    let drawee = gridLayout.getViewById("frescoDrawee") as FrescoDrawee;
    let imagePipeLine = frescoModel.getImagePipeline();
    writeToOutputLabel(drawee, ">>>>> Clearning cache");

    imagePipeLine.clearCaches();
}

export function onSetImage(args: EventData) {
    let button = args.object as Button;
    let gridLayout = button.parent as GridLayout;
    let drawee = gridLayout.getViewById("frescoDrawee") as FrescoDrawee;
    drawee.imageUri = null;
    drawee.imageUri = imageUri;
}

export function onResetImage(args: EventData) {
    let button = args.object as Button;
    let gridLayout = button.parent as GridLayout;
    let drawee = gridLayout.getViewById("frescoDrawee") as FrescoDrawee;
    writeToOutputLabel(drawee, ">>>>> Refreshing cache and 'imageUri'");

    drawee.updateImageUri();
}