import { ObservableArray } from "tns-core-modules/data/observable-array";
import { DataItem } from "./dataItem";

export class ViewModel {
    private _dataItems: ObservableArray<DataItem>;

    constructor() {
        this.initDataItems();
    }

    public get dataItems() {
        return this._dataItems;
    }

    private initDataItems() {
        if (!this._dataItems) {
            this._dataItems = new ObservableArray<DataItem>();

            for (var i = 1; i <= 50; i++) {
                this._dataItems.push(new DataItem(i, "http://lorempixel.com/400/200/"));
            }
        }
    }
}