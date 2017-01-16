import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
    selector: "my-app",
    moduleId: module.id,
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {

    constructor() {

    }

    @ViewChild("drawee") frescoDraweeComponent: ElementRef;

    ngOnInit() {

    }

    onAnimateToZero(args) {
        this.frescoDraweeComponent.nativeElement.animate({
            opacity: 0,
            duration: 500
        });
    }

    onAnimateToOne(args) {
        this.frescoDraweeComponent.nativeElement.animate({
            opacity: 1,
            duration: 500
        });
    }
}