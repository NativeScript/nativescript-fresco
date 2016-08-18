import { EventData} from "data/observable";
import { FrescoDrawee } from "nativescript-fresco";
import { Button } from "ui/button";
import { GridLayout } from "ui/layouts/grid-layout";

export function onSetTap(args: EventData) {
    var button = args.object as Button;
    var gridLayout = button.parent as GridLayout;
    var frescoDrawee = gridLayout.getViewById("frescoDrawee") as FrescoDrawee;
    frescoDrawee.imageUri = "http://lorempixel.com/400/400/";
}