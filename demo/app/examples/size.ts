import { EventData} from "tns-core-modules/data/observable";
import { Img } from "nativescript-image";
import { Button } from "tns-core-modules/ui/button";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import { Observable } from "tns-core-modules/data/observable";

class Image {
    public uri: string;
    public aspectRation: number;
    constructor (uri: string, aspectRation: number) {
        this.uri = uri;
        this.aspectRation = aspectRation;
    }
}

let images: Array<Image> = new Array(
    new Image("https://raw.githubusercontent.com/NativeScript/nativescript-fresco/master/examples-data/drink1.jpg", 1.49),
    new Image("https://raw.githubusercontent.com/NativeScript/nativescript-fresco/master/examples-data/dessert1.jpg", 0.66),
    new Image("https://raw.githubusercontent.com/NativeScript/nativescript-fresco/master/examples-data/drink2.jpg", 1.49));
let currentIndex = 1;

export function onChangeTap(args: EventData) {
    let button = args.object as Button;
    let gridLayout = button.parent as GridLayout;
    let image = gridLayout.getViewById("nsImage") as Img;
    image.aspectRatio = images[currentIndex].aspectRation;
    image.src = images[currentIndex].uri;

    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
}


