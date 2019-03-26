import { Img, FailureEventData } from "nativescript-image";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import { Label } from "tns-core-modules/ui/label";
import { writeToOutputLabel } from "./appLogger";

export function onFailure(args: FailureEventData) {
    let image = args.object as Img;
    let message = ">>>>> onFailure " + args.error;
    writeToOutputLabel(image, message);
}