import { FrescoDrawee, FailureEventData } from "nativescript-fresco";
import { GridLayout } from "ui/layouts/grid-layout";
import { Label } from "ui/label";
import { writeToOutputLabel } from "./appLogger";

export function onFailure(args: FailureEventData) {
    var drawee = args.object as FrescoDrawee;
    var message = ">>>>> onFailure ";
    console.log(message);
    writeToOutputLabel(drawee, message);
}