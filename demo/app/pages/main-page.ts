import { ViewModel } from "../models/main-view-model";
import * as builderModule from "ui/builder";
import { Button } from "ui/button";
import * as timerModule from "timer";
import { TabView, TabViewItem} from "ui/tab-view";
import { GridLayout } from "ui/layouts/grid-layout";
import { ActivityIndicator } from "ui/activity-indicator";
import * as frameModule from "ui/frame";
import * as pageModule from "ui/page";
import { EventData} from "data/observable";
import * as frescoModel from "nativescript-fresco";

let timerId: number;
let layout: GridLayout;
let myComponentInstance;
let xmlFileName: string;
let tabViewItem: TabViewItem;
let indicator: ActivityIndicator;
let page: pageModule.Page;

export function onNavigatingTo(args) {
    this.page = args.object;
    this.page.bindingContext = new ViewModel();
}

export function onSelectedIndexChanged(args) {
    if (timerId) {
        timerModule.clearInterval(timerId);
    }

    var tabView: TabView = args.object;
    tabViewItem = tabView.items[args.newIndex];
    var title: string = tabViewItem.title;
    xmlFileName = title.toLowerCase();
    indicator = tabViewItem.view.getViewById("indicator") as ActivityIndicator;
    layout = tabViewItem.view.getViewById("rootLayout") as GridLayout;
    setContent();
}

export function onClearCache(args: EventData) {
    var imagePipeLine = frescoModel.getImagePipeline();
    imagePipeLine.clearCaches();
    layout.removeChildren();
    toggleBusyIndicator(true);
    setContent();
}

function toggleBusyIndicator(state: boolean) {
    indicator.busy = state;
    indicator.visibility = state ? "visible" : "collapsed";
}

function setContent() {
    var page = frameModule.topmost().currentPage;
    myComponentInstance = builderModule.load({
        path: "~/examples/",
        page: page,
        name: xmlFileName
    });
    if (tabViewItem && tabViewItem.view) {
        if (layout && layout.getChildrenCount() <= 0) {
            timerId = timerModule.setInterval(function () {
                toggleBusyIndicator(false);
                layout.addChild(myComponentInstance);
                timerModule.clearInterval(timerId);
            }, 800);
        }
    }
}