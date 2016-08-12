import * as applicationModel from "application";
import * as frescoModel from "nativescript-fresco";

if (applicationModel.android) {
    applicationModel.onLaunch = function (intent) {
        frescoModel.initialize();
    };
}

applicationModel.start({ moduleName: "pages/main-page" });