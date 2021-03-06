import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '@app/shared';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

import { HeaderComponent, FooterComponent } from './components';
import { MainComponent } from './main.component';
import {
    HomeComponent,
    NewsComponent,
    AboutComponent,
    RegisterComponent
} from './pages';

const CHILD_ROUTES: Routes = [{
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home' },
        { path: 'home', component: HomeComponent },
        { path: 'news', component: NewsComponent },
        { path: 'about', component: AboutComponent },
        { path: 'register', component: RegisterComponent }
    ]
}];

@NgModule({
    imports: [ 
        CommonModule,
        FormsModule,
        MaterialModule,
        NgxExtendedPdfViewerModule,
        RouterModule.forChild(CHILD_ROUTES)
    ],
    entryComponents: [ HeaderComponent, FooterComponent ],
    declarations: [
        MainComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        NewsComponent,
        AboutComponent,
        RegisterComponent
    ],
})
export class MainModule { }