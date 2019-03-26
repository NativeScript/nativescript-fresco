import * as app from "tns-core-modules/application";

import * as imageModule from "nativescript-image";

if (app.android) {
    app.on(app.launchEvent, () => {
        imageModule.initialize({ isDownsampleEnabled: true });
    });

    app.on(app.exitEvent, args => {
        if (args.android) {
            console.log('dev-log: Manually shutting down Image');
            imageModule.shutDown();
        }
    });
}

app.run({ moduleName: "app-root" });