import { EventData} from "tns-core-modules/data/observable";
import { FrescoDrawee, ImagePipeline } from "nativescript-fresco";
import { Button } from "tns-core-modules/ui/button";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import { Label } from "tns-core-modules/ui/label";
import * as frescoModel from "nativescript-fresco";
import { writeToOutputLabel } from "./appLogger";

export function onSeOpacityTo1(args: EventData) {
    let button = args.object as Button;
    let gridLayout = button.parent as GridLayout;
    let drawee = gridLayout.getViewById("opacityDrawee") as FrescoDrawee;
    drawee.opacity = 1;
}

export function onSeOpacityTo01(args: EventData) {
    let button = args.object as Button;
    let gridLayout = button.parent as GridLayout;
    let drawee = gridLayout.getViewById("opacityDrawee") as FrescoDrawee;
    drawee.opacity = 0.1;
}

export function onSeOpacityTo05(args: EventData) {
    let button = args.object as Button;
    let gridLayout = button.parent as GridLayout;
    let drawee = gridLayout.getViewById("opacityDrawee") as FrescoDrawee;
    drawee.opacity = 0.5;
}

export function onAnimateCss(args) {
    let button = args.object as Button;
    let gridLayout = button.parent as GridLayout;
    let drawee = gridLayout.getViewById("opacityDrawee") as FrescoDrawee;
    drawee.animate({
        opacity: 1,
        duration: 200
    });
}