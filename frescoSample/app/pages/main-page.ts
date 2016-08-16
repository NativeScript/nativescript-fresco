import { ViewModel } from "../models/main-view-model";
import * as builderModule from "ui/builder";
import { Button } from "ui/button";
import * as timerModule from "timer";
import { TabView, TabViewItem} from "ui/tab-view";
import { GridLayout } from "ui/layouts/grid-layout";
import { ActivityIndicator } from "ui/activity-indicator";
let timerId;

export function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = new ViewModel();
}

export function onSelectedIndexChanged(args) {
    if (timerId) {
        timerModule.clearInterval(timerId);
    }
    
    var tabView: TabView = args.object;
    var tabViewItem: TabViewItem = tabView.items[args.newIndex];
    var title: string = tabViewItem.title;
    var xmlFileName = title.toLowerCase();
    var myComponentInstance = builderModule.load({
        path: "~/examples/",
        name: xmlFileName
    });
    if (tabViewItem && tabViewItem.view) {
        var layout = tabViewItem.view.getViewById("rootLayout") as GridLayout;
        var indicator = tabViewItem.view.getViewById("indicator") as ActivityIndicator;
        if (layout && layout.getChildrenCount() <= 0) {
            timerId = timerModule.setInterval(function () {
                indicator.busy = false;
                indicator.visibility = "collapsed";
                layout.addChild(myComponentInstance);
                timerModule.clearInterval(timerId);
            }, 800);
        }
    }
}