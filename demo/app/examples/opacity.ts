import { EventData} from "data/observable";
import { FrescoDrawee, ImagePipeline } from "nativescript-fresco";
import { Button } from "ui/button";
import { GridLayout } from "ui/layouts/grid-layout";
import { Label } from "ui/label";
import * as frescoModel from "nativescript-fresco";
import { writeToOutputLabel } from "./appLogger";

export function onSeOpacityTo1(args: EventData) {
    var button = args.object as Button;
    var gridLayout = button.parent as GridLayout;
    var drawee = gridLayout.getViewById("opacityDrawee") as FrescoDrawee;
    drawee.opacity = 1;
}

export function onSeOpacityTo01(args: EventData) {
    var button = args.object as Button;
    var gridLayout = button.parent as GridLayout;
    var drawee = gridLayout.getViewById("opacityDrawee") as FrescoDrawee;
    drawee.opacity = 0.1;
}

export function onSeOpacityTo05(args: EventData) {
    var button = args.object as Button;
    var gridLayout = button.parent as GridLayout;
    var drawee = gridLayout.getViewById("opacityDrawee") as FrescoDrawee;
    drawee.opacity = 0.5;
}

export function onAnimateCss(args) {
    var button = args.object as Button;
    var gridLayout = button.parent as GridLayout;
    var drawee = gridLayout.getViewById("opacityDrawee") as FrescoDrawee;
    drawee.animate({
                    opacity: 1,
                    duration: 200
                }); 
}