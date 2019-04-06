import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '@app/shared';

import { HeaderComponent, FooterComponent } from './components';
import { MainComponent } from './main.component';
import {
    HomeComponent,
    AboutComponent,
    RegisterComponent
} from './pages';

const CHILD_ROUTES: Routes = [{
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home' },
        { path: 'home', component: HomeComponent },
        { path: 'about', component: AboutComponent },
        { path: 'register', component: RegisterComponent }
    ]
}];

@NgModule({
    imports: [ 
        CommonModule,
        FormsModule,
        MaterialModule,
        RouterModule.forChild(CHILD_ROUTES)
    ],
    entryComponents: [ HeaderComponent, FooterComponent ],
    declarations: [
        MainComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        AboutComponent,
        RegisterComponent
    ],
})
export class HomeModule { }