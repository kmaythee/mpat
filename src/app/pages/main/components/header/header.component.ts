import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'mpat-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    @Output() public navToggle = new EventEmitter();

    constructor(
        private router: Router
    ) { }

    ngOnInit() { }

    public onToggleSidenav = () => {
        this.navToggle.emit();
    }
}
