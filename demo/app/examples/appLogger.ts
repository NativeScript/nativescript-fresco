import { Img } from "nativescript-image";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import { Label } from "tns-core-modules/ui/label";

export function  writeToOutputLabel(image: Img, message: string) {
    let gridLayout = image.parent as GridLayout;
    let label = gridLayout.getViewById("outputLabel") as Label;
    console.log(message);
    label.text += "\n" + message;
}