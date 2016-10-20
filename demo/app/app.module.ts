// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { NativeScriptModule, platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppComponent } from "./components/app.component";
import { NSFRESCO_DIRECTIVES } from 'nativescript-fresco/angular';
import { FrescoDrawee } from 'nativescript-fresco';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule, OnInit } from "@angular/core";
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
        NSFRESCO_DIRECTIVES,
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule
    ],
    exports: [
        NativeScriptModule,
        NativeScriptRouterModule
    ]
})
class AppModule { }

platformNativeScriptDynamic().bootstrapModule(AppModule);