import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '@app/shared';

import {
    HeaderComponent,
    ContentComponent,
    FooterComponent
} from './components';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        RouterModule.forChild([
            { path: '', component: HomeComponent }
        ])
    ],
    declarations: [
        HomeComponent,
        HeaderComponent,
        ContentComponent,
        FooterComponent
    ],
    entryComponents: [
        HeaderComponent,
        ContentComponent,
        FooterComponent
    ],
})
export class HomeModule { }