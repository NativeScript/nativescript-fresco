import { EventData } from "tns-core-modules/data/observable";
import { FrescoDrawee } from "nativescript-fresco";
import { Button } from "tns-core-modules/ui/button";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import * as frescoModel from "nativescript-fresco";

export function onSetTap(args: EventData) {
    let button = args.object as Button;
    let gridLayout = button.parent as StackLayout;
    let frescoDrawee = gridLayout.getViewById("frescoDrawee") as FrescoDrawee;
    // Fade only executes the first time the image is loaded. Cached images will not fade in - https://github.com/facebook/fresco/issues/2138
    const imageUri = "https://raw.githubusercontent.com/NativeScript/nativescript-fresco/master/examples-data/drink1.jpg";
    let imagePipeLine = frescoModel.getImagePipeline();
    imagePipeLine.evictFromCache(imageUri);
    frescoDrawee.imageUri = frescoDrawee.imageUri ? "" : imageUri;
}