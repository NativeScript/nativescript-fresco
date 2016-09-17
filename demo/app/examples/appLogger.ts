import { FrescoDrawee } from "nativescript-fresco";
import { GridLayout } from "ui/layouts/grid-layout";
import { Label } from "ui/label";

export function  writeToOutputLabel(drawee: FrescoDrawee, message: string) {
    var gridLayout = drawee.parent as GridLayout;
    var label = gridLayout.getViewById("outputLabel") as Label;
    console.log(message);
    label.text += "\n" + message;
}