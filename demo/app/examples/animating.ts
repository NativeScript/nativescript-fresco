import { Img, FinalEventData, AnimatedImage} from "nativescript-image";
import { writeToOutputLabel } from "./appLogger";

export function onFinalImageSet(args: FinalEventData) {
    let imageView = args.object as Img;
    let message = ">>>>>> onFinalImageSet ";
    writeToOutputLabel(imageView, message);
    let animatedImage = args.android;
    if (animatedImage) {
        writeToOutputLabel(imageView, ">>>>>> animatedImage: isRunning(): " + animatedImage.isRunning());
        writeToOutputLabel(imageView, ">>>>>> animatedImage: start() ");
        animatedImage.start();
        writeToOutputLabel(imageView, ">>>>>> animatedImage: isRunning(): " + animatedImage.isRunning());
    }
}
