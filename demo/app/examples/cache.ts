import { EventData} from "tns-core-modules/data/observable";
import { Img, ImagePipeline } from "nativescript-image";
import { Button } from "tns-core-modules/ui/button";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import * as imageModel from "nativescript-image";
import { writeToOutputLabel } from "./appLogger";

let imageUri = "https://raw.githubusercontent.com/NativeScript/nativescript-fresco/master/examples-data/breakfast1.jpg";

export function onCheckCache(args: EventData) {
    let button = args.object as Button;
    let gridLayout = button.parent as GridLayout;
    let image = gridLayout.getViewById("nsImage") as Img;
    let imagePipeLine = imageModel.getImagePipeline();
    let isInCache = imagePipeLine.isInBitmapMemoryCache(imageUri);
    writeToOutputLabel(image, ">>>>> Image is in the Bitmap memory cache - " + isInCache);
}

export function onClearCache(args: EventData) {
    let button = args.object as Button;
    let gridLayout = button.parent as GridLayout;
    let image = gridLayout.getViewById("nsImage") as Img;
    let imagePipeLine = imageModel.getImagePipeline();
    writeToOutputLabel(image, ">>>>> Clearning cache");

    imagePipeLine.clearCaches();
}

export function onSetImage(args: EventData) {
    let button = args.object as Button;
    let gridLayout = button.parent as GridLayout;
    let image = gridLayout.getViewById("nsImage") as Img;
    image.src = null;
    image.src = imageUri;
}

export function onResetImage(args: EventData) {
    let button = args.object as Button;
    let gridLayout = button.parent as GridLayout;
    let image = gridLayout.getViewById("nsImage") as Img;
    writeToOutputLabel(image, ">>>>> Refreshing cache and 'src'");

    if (image && image.updateImageUri) {
        image.updateImageUri();
    }
}