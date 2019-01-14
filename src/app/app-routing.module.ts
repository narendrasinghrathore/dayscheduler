import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  {
    path: '', component: ScheduleComponent, children: [
      { path: '', component: ScheduleComponent, pathMatch: 'full' }

    ]
  },
  { path: 'login', loadChildren: './src/login/login.module#LoginModule' },
  { path: 'registration', loadChildren: './src/register/register.module#RegisterModule' },
  { path: '**', loadChildren: './src/pageNotFound/pageNotFound.module#PageNotFound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
