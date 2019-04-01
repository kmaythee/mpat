import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import 'hammerjs';

import { AppComponent } from './app.component';
import { ConfigService } from './services';
import { MaterialModule } from './shared';

const BASE_ROUTES: Routes = [
    { path: '', loadChildren: './pages/home/home.module#HomeModule' },
    { path: 'about', loadChildren: './pages/about/about.module#AboutModule' },
    { path: '404', loadChildren: './pages/404/404.module#NotFoundModule' },
    { path: '**', redirectTo: '404' }
]

@NgModule({
    providers: [
        ConfigService,
        { provide: APP_BASE_HREF, useValue: window['_app_base'] || '/' }
    ],
    imports: [
        HttpModule,
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        RouterModule.forRoot(BASE_ROUTES)
    ],
    exports: [ RouterModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
