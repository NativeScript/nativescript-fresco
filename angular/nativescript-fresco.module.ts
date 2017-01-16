import { NgModule } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";

import { NSFRESCO_DIRECTIVES } from "./nativescript-fresco-directives";
import { FrescoDrawee } from "../";

@NgModule({
    declarations: [NSFRESCO_DIRECTIVES],
    exports: [NSFRESCO_DIRECTIVES],
})
export class TNSFrescoModule { }

registerElement("FrescoDrawee", () => FrescoDrawee);