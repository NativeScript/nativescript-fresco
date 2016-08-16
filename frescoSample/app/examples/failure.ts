import { FrescoDrawee, FailureEventData } from "nativescript-fresco";
import { GridLayout } from "ui/layouts/grid-layout";
import { Label } from "ui/label";

export function onFailure(args: FailureEventData) {
    var drawee = args.object as FrescoDrawee;
    var message = ">>>>> onFailure ";
    console.log(message);
    writeToOutputLabel(drawee, message);
}

function  writeToOutputLabel(drawee: FrescoDrawee, message: string) {
    var gridLayout = drawee.parent as GridLayout;
    var label = gridLayout.getViewById("outputLabel") as Label;
    label.text += message;
}