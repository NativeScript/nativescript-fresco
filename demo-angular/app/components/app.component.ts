import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
    selector: "my-app",
    moduleId: module.id,
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {

    constructor() {
    }

    @ViewChild("imageView") imageViewComponent: ElementRef;

    ngOnInit() {

    }

    onAnimateToZero(args) {
        this.imageViewComponent.nativeElement.animate({
            opacity: 0,
            duration: 500
        });
    }

    onAnimateToOne(args) {
        this.imageViewComponent.nativeElement.animate({
            opacity: 1,
            duration: 500
        });
    }
}