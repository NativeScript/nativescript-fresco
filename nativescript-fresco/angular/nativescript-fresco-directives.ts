import * as elementRegistryModule from "nativescript-angular/element-registry";
import { Directive } from '@angular/core';

import { FrescoDrawee } from "nativescript-fresco";

@Directive({
    selector: "FrescoDrawee"
})
class FrescoDraweeDirective {
    constructor() { }
}
export const NSFRESCO_DIRECTIVES = [ FrescoDraweeDirective ];

elementRegistryModule.registerElement("FrescoDrawee", () => FrescoDrawee);