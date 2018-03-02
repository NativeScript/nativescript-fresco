import { Directive } from '@angular/core';

@Directive({
    selector: "FrescoDrawee"
})
export class FrescoDraweeDirective {
    constructor() { }
}
export const NSFRESCO_DIRECTIVES = [ FrescoDraweeDirective ];
