import { Component, OnInit, ViewChild } from "@angular/core";
import * as builderModule from "ui/builder";
import { Button } from "ui/button";
import * as timerModule from "timer";
import { TabView, TabViewItem} from "ui/tab-view";
import { GridLayout } from "ui/layouts/grid-layout";
import { ActivityIndicator } from "ui/activity-indicator";
import { EventData} from "data/observable";
import * as frescoModel from "nativescript-fresco";
import { ViewModel } from "../models/main-view-model";

let timerId: number;
let layout: GridLayout;
let myComponentInstance;
let xmlFileName: string;
let tabViewItem: TabViewItem;
let indicator: ActivityIndicator;

@Component({
    selector: "my-app",
    moduleId: module.id,
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
    private _dataItems;

    constructor() {

    }

    ngOnInit() {
        this.dataItems = new ViewModel().dataItems;
    }

    get dataItems() {
        return this._dataItems;
    }

    set dataItems(value) {
        this._dataItems = value;
    }
}