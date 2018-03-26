import { FrescoDrawee, FailureEventData, FinalEventData, IntermediateEventData } from "nativescript-fresco";
import { EventData } from "tns-core-modules/data/observable";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import { Label } from "tns-core-modules/ui/label";
import { writeToOutputLabel } from "./appLogger";

export function onFinalImageSet(args: FinalEventData) {
    let drawee = args.object as FrescoDrawee;
    let message = ">>>>> onFinalImageSet ";
    console.log(message);
    writeToOutputLabel(drawee, message);
}

export function onIntermediateImageSet(args: IntermediateEventData) {
    let drawee = args.object as FrescoDrawee;
    let message = ">>>>> onIntermediateImageSet ";
    console.log(message);
    writeToOutputLabel(drawee, message);
}

export function intermediateImageFailed(args: FailureEventData) {
    let drawee = args.object as FrescoDrawee;
    let message = ">>>>> intermediateImageFailed ";
    console.log(message);
    writeToOutputLabel(drawee, message);
}


export function onSubmit(args: EventData) {
    let drawee = args.object as FrescoDrawee;
    let message = ">>>>> onSubmit ";
    console.log(message);
    writeToOutputLabel(drawee, message);
}


export function onRelease(args: EventData) {
    let drawee = args.object as FrescoDrawee;
    let message = ">>>>> onRelease ";
    console.log(message);
    writeToOutputLabel(drawee, message);
}