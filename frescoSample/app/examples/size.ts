import { EventData} from "data/observable";
import { FrescoDrawee } from "nativescript-fresco";
import { Button } from "ui/button";
import { GridLayout } from "ui/layouts/grid-layout";
import { Observable } from "data/observable";

class Image {
    public uri: string;
    public aspectRation: number;
    constructor (uri: string, aspectRation: number) {
        this.uri = uri;
        this.aspectRation = aspectRation;
    }
}

let uris: Array<Image> = new Array(new Image("http://lorempixel.com/200/200", 1), new Image("http://lorempixel.com/400/200", 2), new Image("http://lorempixel.com/400/400", 1), new Image("http://lorempixel.com/200/400", 0.5));
let currentIndex = 1;

export function onChangeTap(args: EventData) {
    var button = args.object as Button;
    var gridLayout = button.parent as GridLayout;
    var drawee = gridLayout.getViewById("frescoDrawee") as FrescoDrawee;
    drawee.aspectRatio = uris[currentIndex].aspectRation;
    drawee.imageUri = uris[currentIndex].uri;
    console.log(drawee.imageUri);
    console.log(drawee.aspectRatio);

    currentIndex++;
    if (currentIndex >= uris.length) {
        currentIndex = 0;
    }
}


