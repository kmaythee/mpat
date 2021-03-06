import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NotFoundComponent } from './404.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: NotFoundComponent }
        ])
    ],
    declarations: [NotFoundComponent]
})
export class NotFoundModule {}
