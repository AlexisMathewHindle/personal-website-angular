import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {WorkComponent} from './work/work.component';
import {ContactComponent} from './contact/contact.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path:'work',
        component: WorkComponent
    },
    {
        path:'contact',
        component: ContactComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);