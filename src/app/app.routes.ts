// src/app/routes.ts

import { Routes } from '@angular/router';
import { HomePage } from './components/home-page/home-page';
import { Application } from './components/reusable/application/application';
import { App } from './app';

export const routes: Routes = [
  { path: '', component: App },
  { path: 'careers/:id', component: Application, title: 'Apply Now' },
];