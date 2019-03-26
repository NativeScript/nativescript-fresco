// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule, OnInit, NO_ERRORS_SCHEMA } from "@angular/core";
import { AppComponent } from "./components/app.component";

import { TNSImageModule } from "nativescript-image/angular";
import * as imageModule from "nativescript-image";
import * as applicationModule from "tns-core-modules/application";

if (applicationModule.android) {
    applicationModule.on("launch", () => {
        imageModule.initialize();
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
        TNSImageModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
