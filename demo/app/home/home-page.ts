import { ViewModel } from "./home-view-model";
import { EventData } from "tns-core-modules/data/observable";
import * as imageModel from "nativescript-image";

export function onNavigatingTo(args) {
    this.page = args.object;
    this.page.bindingContext = new ViewModel();
}

export function onClearCache(args: EventData) {
    let imagePipeLine = imageModel.getImagePipeline();
    imagePipeLine.clearCaches();
}