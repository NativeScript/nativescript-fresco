import { EventData} from "tns-core-modules/data/observable";
import { FrescoDrawee } from "nativescript-fresco";
import { Button } from "tns-core-modules/ui/button";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";

export function onSetTap(args: EventData) {
    let button = args.object as Button;
    let gridLayout = button.parent as StackLayout;
    let frescoDrawee = gridLayout.getViewById("frescoDrawee") as FrescoDrawee;
    frescoDrawee.imageUri = "http://lorempixel.com/400/400/";
}