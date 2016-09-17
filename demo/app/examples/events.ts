import { FrescoDrawee, FailureEventData, FinalEventData, IntermediateEventData } from "nativescript-fresco";
import { EventData } from "data/observable";
import { GridLayout } from "ui/layouts/grid-layout";
import { Label } from "ui/label";
import { writeToOutputLabel } from "./appLogger";

export function onFinalImageSet(args: FinalEventData) {
    var drawee = args.object as FrescoDrawee;
    var message = ">>>>> onFinalImageSet ";
    console.log(message);
    writeToOutputLabel(drawee, message);
}

export function onIntermediateImageSet(args: IntermediateEventData) {
    var drawee = args.object as FrescoDrawee;
    var message = ">>>>> onIntermediateImageSet ";
    console.log(message);
    writeToOutputLabel(drawee, message);
}

export function intermediateImageFailed(args: FailureEventData) {
    var drawee = args.object as FrescoDrawee;
    var message = ">>>>> intermediateImageFailed ";
    console.log(message);
    writeToOutputLabel(drawee, message);
}


export function onSubmit(args: EventData) {
    var drawee = args.object as FrescoDrawee;
    var message = ">>>>> onSubmit ";
    console.log(message);
    writeToOutputLabel(drawee, message);
}


export function onRelease(args: EventData) {
    var drawee = args.object as FrescoDrawee;
    var message = ">>>>> onRelease ";
    console.log(message);
    writeToOutputLabel(drawee, message);
}