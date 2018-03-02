import { FrescoDrawee } from "nativescript-fresco";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import { Label } from "tns-core-modules/ui/label";

export function  writeToOutputLabel(drawee: FrescoDrawee, message: string) {
    var gridLayout = drawee.parent as GridLayout;
    var label = gridLayout.getViewById("outputLabel") as Label;
    console.log(message);
    label.text += "\n" + message;
}