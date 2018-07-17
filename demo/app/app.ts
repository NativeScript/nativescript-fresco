import * as app from "application";

import * as frescoModule from "nativescript-fresco";

if (app.android) {
    app.on(app.launchEvent, () => {
        frescoModule.initialize({ isDownsampleEnabled: true });
    });

    app.on(app.exitEvent, (args) => {
        if (args.android) {
            console.log("dev-log: Manually shutting down Fresco");
            frescoModule.shutDown();
        }
    });
}

app.run({ moduleName: "app-root" });