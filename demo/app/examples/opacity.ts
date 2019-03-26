import { EventData} from "tns-core-modules/data/observable";
import { Img, ImagePipeline } from "nativescript-image";
import { Button } from "tns-core-modules/ui/button";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";

export function onSeOpacityTo1(args: EventData) {
    let button = args.object as Button;
    let gridLayout = button.parent as GridLayout;
    let image = gridLayout.getViewById("opacityImage") as Img;
    image.opacity = 1;
}

export function onSeOpacityTo01(args: EventData) {
    let button = args.object as Button;
    let gridLayout = button.parent as GridLayout;
    let image = gridLayout.getViewById("opacityImage") as Img;
    image.opacity = 0.1;
}

export function onSeOpacityTo05(args: EventData) {
    let button = args.object as Button;
    let gridLayout = button.parent as GridLayout;
    let image = gridLayout.getViewById("opacityImage") as Img;
    image.opacity = 0.5;
}

export function onAnimateCss(args) {
    let button = args.object as Button;
    let gridLayout = button.parent as GridLayout;
    let image = gridLayout.getViewById("opacityImage") as Img;
    image.animate({
        opacity: 1,
        duration: 200
    });
}