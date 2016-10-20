import * as applicationModule from "application";
import * as frescoModule from "nativescript-fresco";

if (applicationModule.android) {
    applicationModule.on("launch", () => {
        frescoModule.initialize();
    });
}

applicationModule.start({ moduleName: "pages/main-page" });