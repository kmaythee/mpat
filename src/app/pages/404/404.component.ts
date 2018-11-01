import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'mpat-404',
    templateUrl: './404.component.html',
    styleUrls: ['404.component.scss']
})
export class NotFoundComponent {
    constructor(
        private location: Location
    ) { }

    previous() {
        this.location.back();
    }
}
