// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule, OnInit, NO_ERRORS_SCHEMA } from "@angular/core";
import { AppComponent } from "./components/app.component";

import { TNSFrescoModule } from "nativescript-fresco/angular";
import * as frescoModule from "nativescript-fresco";
import * as applicationModule from "application";

if (applicationModule.android) {
    applicationModule.on("launch", () => {
        frescoModule.initialize();
    });
}

@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        TNSFrescoModule
    ],
    exports: [
        NativeScriptModule,
        NativeScriptRouterModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
