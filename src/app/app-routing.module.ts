import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PageWelcomeComponent } from './page-welcome/page-welcome.component';

const routes: Routes = [

  {
    path: '',
    component: AppComponent
  },
  {
    path: 'welcome',
    component: PageWelcomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
