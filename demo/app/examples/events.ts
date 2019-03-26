import { Img, FailureEventData, FinalEventData, IntermediateEventData } from "nativescript-image";
import { EventData } from "tns-core-modules/data/observable";
import { writeToOutputLabel } from "./appLogger";

export function onFinalImageSet(args: FinalEventData) {
    let image = args.object as Img;
    let message = ">>>>> onFinalImageSet ";
    writeToOutputLabel(image, message);
}

export function onFailure(args: FailureEventData) {
    let image = args.object as Img;
    let message = ">>>>> onFailure " + (args.error && args.error.getMessage());
    writeToOutputLabel(image, message);
}

export function onIntermediateImageFailed(args: FailureEventData) {
    let image = args.object as Img;
    let message = ">>>>> onIntermediateImageFailed " + (args.error && args.error.getMessage());
    writeToOutputLabel(image, message);
}

export function onIntermediateImageSet(args: IntermediateEventData) {
    let image = args.object as Img;
    let message = ">>>>> onIntermediateImageSet ";
    writeToOutputLabel(image, message);
}

export function onSubmit(args: EventData) {
    let image = args.object as Img;
    let message = ">>>>> onSubmit ";
    writeToOutputLabel(image, message);
}


export function onRelease(args: EventData) {
    let image = args.object as Img;
    let message = ">>>>> onRelease ";
    writeToOutputLabel(image, message);
}