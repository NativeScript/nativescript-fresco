import { FrescoDrawee, FinalEventData, IAnimatedImage } from "nativescript-fresco";
import { writeToOutputLabel } from "./appLogger";

export function onFinalImageSet(args: FinalEventData) {
    let drawee = args.object as FrescoDrawee;
    let message = ">>>>>> onFinalImageSet ";
    writeToOutputLabel(drawee, message);
    let animatedImage = args.animatable as IAnimatedImage;
    if (animatedImage) {
        writeToOutputLabel(drawee, ">>>>>> animatedImage: isRunning(): " + animatedImage.isRunning());
        writeToOutputLabel(drawee, ">>>>>> animatedImage: start() ");
        animatedImage.start();
        writeToOutputLabel(drawee, ">>>>>> animatedImage: isRunning(): " + animatedImage.isRunning());
    }
}
