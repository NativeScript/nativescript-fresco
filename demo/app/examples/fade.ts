import { EventData } from "tns-core-modules/data/observable";
import { Img } from "nativescript-image";
import { Button } from "tns-core-modules/ui/button";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import * as imageModel from "nativescript-image";

export function onSetTap(args: EventData) {
    let button = args.object as Button;
    let gridLayout = button.parent as StackLayout;
    let image = gridLayout.getViewById("nsImage") as Img;
    // Fade only executes the first time the image is loaded. Cached images will not fade in - https://github.com/facebook/fresco/issues/2138
    const imageUri = "https://raw.githubusercontent.com/NativeScript/nativescript-fresco/master/examples-data/drink1.jpg";
    let imagePipeLine = imageModel.getImagePipeline();
    imagePipeLine.evictFromCache(imageUri);
    image.src = image.src ? "" : imageUri;
}