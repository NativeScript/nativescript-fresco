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

            for (let i = 1; i <= 50; i++) {
                let imageUrl = "https://raw.githubusercontent.com/NativeScript/nativescript-fresco/master/examples-data/dessert1.jpg";
                let aspectRatio = 0.66;
                if (i % 2 === 0) {
                    imageUrl = "https://raw.githubusercontent.com/NativeScript/nativescript-fresco/master/examples-data/drink1.jpg";
                    aspectRatio = 1.49;
                }

                this._dataItems.push(new DataItem(i, aspectRatio, imageUrl));
            }
        }
    }
}