import * as app from "tns-core-modules/application";

import * as frescoModule from "nativescript-fresco";

app.on(app.launchEvent, () => {
    frescoModule.initialize({ isDownsampleEnabled: true });
    // To Manually stop Fresco use
    // frescoModule.shutDown();
});

app.run({ moduleName: "app-root" });