import { FrescoDrawee, FailureEventData, FinalEventData, IntermediateEventData } from "nativescript-fresco";
import { EventData } from "tns-core-modules/data/observable";
import { writeToOutputLabel } from "./appLogger";

export function onFinalImageSet(args: FinalEventData) {
    let drawee = args.object as FrescoDrawee;
    let message = ">>>>> onFinalImageSet ";
    writeToOutputLabel(drawee, message);
}

export function onFailure(args: FailureEventData) {
    let drawee = args.object as FrescoDrawee;
    let message = ">>>>> onFailure " + (args.error && args.error.getMessage());
    writeToOutputLabel(drawee, message);
}

export function onIntermediateImageFailed(args: FailureEventData) {
    let drawee = args.object as FrescoDrawee;
    let message = ">>>>> onIntermediateImageFailed " + (args.error && args.error.getMessage());
    writeToOutputLabel(drawee, message);
}

export function onIntermediateImageSet(args: IntermediateEventData) {
    let drawee = args.object as FrescoDrawee;
    let message = ">>>>> onIntermediateImageSet ";
    writeToOutputLabel(drawee, message);
}

export function onSubmit(args: EventData) {
    let drawee = args.object as FrescoDrawee;
    let message = ">>>>> onSubmit ";
    writeToOutputLabel(drawee, message);
}


export function onRelease(args: EventData) {
    let drawee = args.object as FrescoDrawee;
    let message = ">>>>> onRelease ";
    writeToOutputLabel(drawee, message);
}